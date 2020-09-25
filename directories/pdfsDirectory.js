const fs = require('fs');

exports.directory = function () {
    let pdfsFolders = fs.readdirSync(__dirname + '/../storage/books/pdf/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/pdf/' + '/' + file).isDirectory();
    });
    pdfsFolders.unshift("");
    return pdfsFolders;
};

exports.pdfs = function () {
    let pdfs = fs.readdirSync(__dirname + '/../storage/books/pdf/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/pdf/' + '/' + file).isFile();
    });
    return pdfs;
};

exports.directoriesNames = function () {
    let pdfsFolders = fs.readdirSync(__dirname + '/../storage/books/pdf/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/pdf/' + '/' + file).isDirectory();
    });
    return pdfsFolders;
}

exports.directoriesPdfs = function () {
    let pdfsFolders = fs.readdirSync(__dirname + '/../storage/books/pdf/').filter(function (file) {
        return fs.statSync(__dirname + '/../storage/books/pdf/' + '/' + file).isDirectory();
    });
    let pdfsFoldersArrays = [];
    for (let i = 0; i < pdfsFolders.length; i++) {
        let videoFolder = pdfsFolders[i];
        let pdfsFoldersArray = fs.readdirSync(__dirname + '/../storage/books/pdf/' + videoFolder + '/');
        pdfsFoldersArrays[i] = pdfsFoldersArray;
    }
    return pdfsFoldersArrays;
}
