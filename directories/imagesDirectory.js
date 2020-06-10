const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/images/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/images/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};