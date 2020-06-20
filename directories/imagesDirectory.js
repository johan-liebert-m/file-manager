const fs = require('fs');

exports.directory = function () {
    let imagesFolders = fs.readdirSync(__dirname + '/../storage/images/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/images/' + '/' + file).isDirectory();
    });
    imagesFolders.unshift("");
    return imagesFolders;
};

exports.images = function () {
    let images = fs.readdirSync(__dirname + '/../storage/images/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/images/' + '/' + file).isFile();
    });
    return images;
};

exports.directoriesNames = function () {
    let imagesFolders = fs.readdirSync(__dirname + '/../storage/images/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/images/' + '/' + file).isDirectory();
    });
    return imagesFolders;
}

exports.directoriesImages = function () {
    let imagesFolders = fs.readdirSync(__dirname + '/../storage/images/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/images/' + '/' + file).isDirectory();
    });
    let imagesFoldersArrays = [];
    for (let i = 0; i < imagesFolders.length; i++) {
        let videoFolder = imagesFolders[i];
        let imagesFoldersArray = fs.readdirSync(__dirname + '/../storage/images/' + videoFolder + '/');
        imagesFoldersArrays[i] = imagesFoldersArray;
    }
    return imagesFoldersArrays;
}
