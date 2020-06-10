const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/applications/compressed/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/applications/compressed/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};