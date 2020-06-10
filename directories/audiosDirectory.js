const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/audios/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/audios/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};