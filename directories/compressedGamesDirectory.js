const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/games/compressed/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/games/compressed/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};