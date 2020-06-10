const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/videos/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/videos/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};