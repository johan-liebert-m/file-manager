const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/softwares/iso/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/softwares/iso/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};