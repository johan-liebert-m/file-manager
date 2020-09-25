const fs = require('fs');

exports.directory = function () {
    let ebooksFolders = fs.readdirSync(__dirname + '/../storage/books/ebook/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/ebook/' + '/' + file).isDirectory();
    });
    ebooksFolders.unshift("");
    return ebooksFolders;
};

exports.ebooks = function () {
    let ebooks = fs.readdirSync(__dirname + '/../storage/books/ebook/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/ebook/' + '/' + file).isFile();
    });
    return ebooks;
};

exports.directoriesNames = function () {
    let ebooksFolders = fs.readdirSync(__dirname + '/../storage/books/ebook/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/ebook/' + '/' + file).isDirectory();
    });
    return ebooksFolders;
}

exports.directoriesEbooks = function () {
    let ebooksFolders = fs.readdirSync(__dirname + '/../storage/books/ebook/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/ebook/' + '/' + file).isDirectory();
    });
    let ebooksFoldersArrays = [];
    for (let i = 0; i < ebooksFolders.length; i++) {
        let videoFolder = ebooksFolders[i];
        let ebooksFoldersArray = fs.readdirSync(__dirname + '/../storage/books/ebook/' + videoFolder + '/');
        ebooksFoldersArrays[i] = ebooksFoldersArray;
    }
    return ebooksFoldersArrays;
}
