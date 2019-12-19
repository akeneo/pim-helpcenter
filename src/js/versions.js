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
                const versionsDom = document.getElementById('versions');
                const filepath= versionsDom.dataset.filepath;
                data.forEach(function (version) {
                    var node = document.createElement('li');
                    var link = document.createElement('a');
                    link.href = version.suffix_with_filename ? version.url + filepath : version.url;
                    link.innerHTML = version.label;
                    node.appendChild(link);
                    versionsDom.appendChild(node);
                });
            }
        }
    );
}
