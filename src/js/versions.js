/**
 * This file allows to get the dropdown listing the available versions of the documentation thanks to an AJAX call.
 */
const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

const updateVersions = function() {
    getJSON('/pim/versions.json',
        function (err, data) {
            if (err === null) {
                data.forEach(function (version, key) {
                    var versionsDom, filepath;
                    var link = document.createElement('a');
                    link.innerHTML = version.label;
                    if(key === 0) {
                        versionsDom = document.getElementById('last-EE-version');
                        filepath = versionsDom.dataset.filepath;
                        link.href = version.suffix_with_filename ? version.url + filepath : version.url;
                        versionsDom.appendChild(link);
                        if(version.version === versionsDom.dataset.currentDocVersion){
                            versionsDom.classList.add("active");
                        }
                    } else {
                        versionsDom = document.getElementById('version-dropdown');
                        filepath = versionsDom.dataset.filepath;
                        link.href = version.suffix_with_filename ? version.url + filepath : version.url;
                        var node = document.createElement('li');
                        node.appendChild(link);
                        versionsDom.appendChild(node);
                        if(version.version === versionsDom.dataset.currentDocVersion){
                            versionsDom.parentNode.classList.add("active");
                        }
                    }
                });
            }
        }
    );
}
