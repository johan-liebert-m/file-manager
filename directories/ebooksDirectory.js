const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/books/ebooks/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/ebooks/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};