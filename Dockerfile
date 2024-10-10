FROM node:18-alpine
RUN apk add yarn
RUN apk add openssh-client
RUN apk add rsync
RUN npm install -g firebase-tools@v9
