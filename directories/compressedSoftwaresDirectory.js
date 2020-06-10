const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/softwares/compressed/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/softwares/compressed/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};