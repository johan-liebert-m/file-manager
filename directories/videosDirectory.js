const fs = require('fs');

exports.directory = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/videos/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/videos/' + '/' + file).isDirectory();
    });
    videosFolders.unshift("");
    return videosFolders;
};

exports.videos = function () {
    let videos = fs.readdirSync(__dirname + '/../storage/videos/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/videos/' + '/' + file).isFile();
    });
    return videos;
};

exports.directoriesNames = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/videos/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/videos/' + '/' + file).isDirectory();
    });
    return videosFolders;
}

exports.directoriesVideos = function () {
    let videosFolders = fs.readdirSync(__dirname + '/../storage/videos/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/videos/' + '/' + file).isDirectory();
    });
    let videosFoldersArrays = [];
    for (let i = 0; i < videosFolders.length; i++) {
        let videoFolder = videosFolders[i];
        let videosFoldersArray = fs.readdirSync(__dirname + '/../storage/videos/' + videoFolder + '/');
        videosFoldersArrays[i] = videosFoldersArray;
    }
    return videosFoldersArrays;
}
