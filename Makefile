UID = $(shell id -u)
GID = $(shell id -g)

DOCKER_IMAGE_TAG = pim-helpcenter:master
DOCKER_RUN = docker run -it --rm -u $(UID):$(GID) -v "$${PWD}":/opt/workdir -w /opt/workdir

.PHONY: docker-build yarn-install serve deploy-staging
.DEFAULT_GOAL := build

docker-build:
	docker build -t $(DOCKER_IMAGE_TAG) - < Dockerfile

yarn-install: docker-build
	$(DOCKER_RUN) -e HOME=/tmp -v /etc/passwd:/etc/passwd:ro $(DOCKER_IMAGE_TAG) yarn install --frozen-lockfile

firebase-install: docker-build
	$(DOCKER_RUN) -e HOME=/tmp -v /etc/passwd:/etc/passwd:ro -w /opt/workdir/src/firebase/functions pim-helpcenter:master npm ci

watch: yarn-install
	$(DOCKER_RUN) --expose=8000 -p=8000:8000 $(DOCKER_IMAGE_TAG) yarn gulp serve

build: yarn-install
	 # default value of HELP_CENTER_URL is 'https://help.akeneo.com/'
	 # it allows to generate the correct links of the updates for the communication panel into the PIM
	 $(DOCKER_RUN) -e HELP_CENTER_URL=$(HELP_CENTER_URL) -e ONLY_PREVIOUS_MONTH_UPDATES=$(ONLY_PREVIOUS_MONTH_UPDATES) $(DOCKER_IMAGE_TAG) yarn gulp create-dist

test-helpcenter: yarn-install
	$(DOCKER_RUN) $(DOCKER_IMAGE_TAG) yarn test tests/updates

test-push-announcements: yarn-install
	bash -c 'echo -E $$GOOGLE_APPLICATION_CREDENTIALS > ./service-account-file.json' # use bash version of echo to print correctly \n
	$(DOCKER_RUN) -e GOOGLE_APPLICATION_CREDENTIALS="/opt/workdir/service-account-file.json" -e FIRESTORE_URL="https://$(FIREBASE_PROJECT).firebaseio.com" pim-helpcenter:master yarn test tests/firebase/

test-firebase-functions: firebase-install
	bash -c 'echo -E $$GOOGLE_APPLICATION_CREDENTIALS > ./service-account-file.json' # use bash version of echo to print correctly \n
	$(DOCKER_RUN) -e GOOGLE_APPLICATION_CREDENTIALS="/opt/workdir/service-account-file.json" -e FIRESTORE_URL="https://$(FIREBASE_PROJECT).firebaseio.com" -w /opt/workdir/src/firebase/functions  $(DOCKER_IMAGE_TAG) npm run test

deploy: build
	$(DOCKER_RUN) -v /etc/passwd:/etc/passwd:ro -v $${SSH_AUTH_SOCK}:/ssh-auth.sock:ro -e SSH_AUTH_SOCK=/ssh-auth.sock $(DOCKER_IMAGE_TAG) rsync --no-v -e "ssh -q -p $${PORT} -o StrictHostKeyChecking=no" -az --delete dist/pim/v7/ akeneo@$${HOSTNAME}:/var/www/html/pim/v7
	$(DOCKER_RUN) -v /etc/passwd:/etc/passwd:ro -v $${SSH_AUTH_SOCK}:/ssh-auth.sock:ro -e SSH_AUTH_SOCK=/ssh-auth.sock $(DOCKER_IMAGE_TAG) rsync --no-v -e "ssh -q -p $${PORT} -o StrictHostKeyChecking=no" -az dist/pim/versions.json akeneo@$${HOSTNAME}:/var/www/html/pim/versions.json

push-announcements: build
	bash -c 'echo -E $$GOOGLE_APPLICATION_CREDENTIALS > ./service-account-file.json' # use bash version of echo to print correctly \n
	$(DOCKER_RUN) -e GOOGLE_APPLICATION_CREDENTIALS="/opt/workdir/service-account-file.json" -e FIRESTORE_URL="https://$(FIREBASE_PROJECT).firebaseio.com" pim-helpcenter:master yarn gulp push-announcements

deploy-firebase-functions: firebase-install
	bash -c 'echo -E $$GOOGLE_APPLICATION_CREDENTIALS > ./service-account-file.json' # use bash version of echo to print correctly \n
	$(DOCKER_RUN) -e HOME=/tmp -v /etc/passwd:/etc/passwd:ro -e GOOGLE_APPLICATION_CREDENTIALS="/opt/workdir/service-account-file.json" -w /opt/workdir/src/firebase pim-helpcenter:master sh -c "firebase use $$FIREBASE_PROJECT && firebase deploy -f"
