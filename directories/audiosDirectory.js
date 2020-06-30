const fs = require('fs');

exports.directory = function () {
    let audiosFolders = fs.readdirSync(__dirname + '/../storage/audios/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/audios/' + '/' + file).isDirectory();
    });
    audiosFolders.unshift("");
    return audiosFolders;
};

exports.audios = function () {
    let audios = fs.readdirSync(__dirname + '/../storage/audios/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/audios/' + '/' + file).isFile();
    });
    return audios;
};

exports.directoriesNames = function () {
    let audiosFolders = fs.readdirSync(__dirname + '/../storage/audios/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/audios/' + '/' + file).isDirectory();
    });
    return audiosFolders;
}

exports.directoriesAudios = function () {
    let audiosFolders = fs.readdirSync(__dirname + '/../storage/audios/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/audios/' + '/' + file).isDirectory();
    });
    let audiosFoldersArrays = [];
    for (let i = 0; i < audiosFolders.length; i++) {
        let audioFolder = audiosFolders[i];
        let audiosFoldersArray = fs.readdirSync(__dirname + '/../storage/audios/' + audioFolder + '/');
        audiosFoldersArrays[i] = audiosFoldersArray;
    }
    return audiosFoldersArrays;
}
