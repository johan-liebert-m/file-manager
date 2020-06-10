const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/games/iso/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/games/iso/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};