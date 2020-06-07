// import express
const express = require('express');
const app = express();

// import body-parser
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// import formidable
const formidable = require('formidable');

// import fs
const fs = require('fs');

// set ejs as default view engine
app.set('view engine', 'ejs');

// static directories
app.use(express.static(__dirname + '/storage'));
app.use(express.static(__dirname + '/code'));

// home page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/home.html');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// video manager
app.get('/video-manager', function(req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/video-manager.html');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// upload page
app.get('/upload-files', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/upload-files.html');
});

// upload video
app.post('/upload-video', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 2000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upVideo[1] == undefined) {
            if (fields.folderName == undefined) {
                fs.rename(files.upVideo.path, __dirname + '/storage/videos/' + files.upVideo.name, function (err) {
                    if (err) throw err;
                });
            }
            else {
                let newpath = __dirname + '/storage/videos/' + fields.folderName;
                if (!fs.existsSync(newpath)){
                    fs.mkdirSync(newpath);
                }
                console.log(newpath);
                fs.rename(files.upVideo.path, newpath + '/' + files.upVideo.name, function (err) {
                    if (err) throw err;
                });
            }
        }
        else {
            if (fields.folderName != undefined) {
                if (fields.folderName.length < 1) {
                    for (let i = 0; i < files.upVideo.length; i++) {
                        fs.rename(files.upVideo[i].path, __dirname + '/storage/videos/' + files.upVideo[i].name, function (err) {
                            if (err) throw err;
                        });
                    }
                }
                else {
                    let newpath = __dirname + '/storage/videos/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    for (let i = 0; i < files.upVideo.length; i++) {
                        fs.rename(files.upVideo[i].path, newpath + '/' + files.upVideo[i].name, function (err) {
                            if (err) throw err;
                        });
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-video');
});

// uploaded video
app.get('/uploaded-video', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-video.html');
});

// upload audio
app.post('/upload-audio', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 2000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upAudio[1] == undefined) {
            if (fields.folderName == undefined) {
                fs.rename(files.upAudio.path, __dirname + '/storage/audios/' + files.upAudio.name, function (err) {
                    if (err) throw err;
                });
            }
            else {
                let newpath = __dirname + '/storage/audios/' + fields.folderName;
                if (!fs.existsSync(newpath)){
                    fs.mkdirSync(newpath);
                }
                console.log(newpath);
                fs.rename(files.upAudio.path, newpath + '/' + files.upAudio.name, function (err) {
                    if (err) throw err;
                });
            }
        }
        else {
            if (fields.folderName != undefined) {
                if (fields.folderName.length < 1) {
                    for (let i = 0; i < files.upAudio.length; i++) {
                        fs.rename(files.upAudio[i].path, __dirname + '/storage/audios/' + files.upAudio[i].name, function (err) {
                            if (err) throw err;
                        });
                    }
                }
                else {
                    let newpath = __dirname + '/storage/audios/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    for (let i = 0; i < files.upAudio.length; i++) {
                        fs.rename(files.upAudio[i].path, newpath + '/' + files.upAudio[i].name, function (err) {
                            if (err) throw err;
                        });
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-audio');
});

// uploaded audio
app.get('/uploaded-audio', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-audio.html');
});

// upload image
app.post('/upload-image', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 2000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upImage[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upImage.path, __dirname + '/storage/images/' + files.upImage.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/images/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upImage.path, newpath + '/' + files.upImage.name, function (err) {
                        if (err) throw err;
                    });
                    }
        }
        else {
            if (fields.folderName != undefined) {
                if (fields.folderName.length < 1) {
                    for (let i = 0; i < files.upImage.length; i++) {
                        fs.rename(files.upImage[i].path, __dirname + '/storage/images/' + files.upImage[i].name, function (err) {
                            if (err) throw err;
                        });
                    }
                }
                else {
                    let newpath = __dirname + '/storage/images/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    for (let i = 0; i < files.upImage.length; i++) {
                        fs.rename(files.upImage[i].path, newpath + '/' + files.upImage[i].name, function (err) {
                            if (err) throw err;
                        });
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-image');
});

// uploaded image
app.get('/uploaded-image', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-image.html');
});

// upload book
app.post('/upload-book', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 2000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upPdf != undefined) {
            if (files.upPdf[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upPdf.path, __dirname + '/storage/books/pdf/' + files.upPdf.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/books/pdf/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upPdf.path, newpath + '/' + files.upPdf.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upPdf.length; i++) {
                            fs.rename(files.upPdf[i].path, __dirname + '/storage/books/pdf/' + files.upPdf[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/books/pdf/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upPdf.length; i++) {
                            fs.rename(files.upPdf[i].path, newpath + '/' + files.upPdf[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
        else if (files.upEbook != undefined) {
            if (files.upEbook[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upEbook.path, __dirname + '/storage/books/ebooks/' + files.upEbook.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/books/ebooks/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upEbook.path, newpath + '/' + files.upEbook.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upEbook.length; i++) {
                            fs.rename(files.upEbook[i].path, __dirname + '/storage/books/ebooks/' + files.upEbook[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/books/ebooks/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upEbook.length; i++) {
                            fs.rename(files.upEbook[i].path, newpath + '/' + files.upEbook[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-book');
});

// uploaded book
app.get('/uploaded-book', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-book.html');
});

// upload software
app.post('/upload-software', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 20000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upCompressedSoftware != undefined) {
            if (files.upCompressedSoftware[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upCompressedSoftware.path, __dirname + '/storage/softwares/compressed/' + files.upCompressedSoftware.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/softwares/compressed/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upCompressedSoftware.path, newpath + '/' + files.upCompressedSoftware.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upCompressedSoftware.length; i++) {
                            fs.rename(files.upCompressedSoftware[i].path, __dirname + '/storage/softwares/compressed/' + files.upCompressedSoftware[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/softwares/compressed/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upCompressedSoftware.length; i++) {
                            fs.rename(files.upCompressedSoftware[i].path, newpath + '/' + files.upCompressedSoftware[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
        else if (files.upIsoSoftware != undefined) {
            if (files.upIsoSoftware[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upIsoSoftware.path, __dirname + '/storage/softwares/iso/' + files.upIsoSoftware.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/softwares/iso/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upIsoSoftware.path, newpath + '/' + files.upIsoSoftware.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upIsoSoftware.length; i++) {
                            fs.rename(files.upIsoSoftware[i].path, __dirname + '/storage/softwares/iso/' + files.upIsoSoftware[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/softwares/iso/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upIsoSoftware.length; i++) {
                            fs.rename(files.upIsoSoftware[i].path, newpath + '/' + files.upIsoSoftware[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-book');
});

// uploaded software
app.get('/uploaded-software', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-software.html');
});

// upload game
app.post('/upload-game', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 20000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upCompressedGame != undefined) {
            if (files.upCompressedGame[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upCompressedGame.path, __dirname + '/storage/games/compressed/' + files.upCompressedGame.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/games/compressed/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upCompressedGame.path, newpath + '/' + files.upCompressedGame.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upCompressedGame.length; i++) {
                            fs.rename(files.upCompressedGame[i].path, __dirname + '/storage/games/compressed/' + files.upCompressedGame[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/games/compressed/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upCompressedGame.length; i++) {
                            fs.rename(files.upIsoGame[i].path, newpath + '/' + files.upCompressedGame[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
        else if (files.upIsoGame != undefined) {
            if (files.upIsoGame[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upIsoGame.path, __dirname + '/storage/games/iso/' + files.upIsoGame.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/games/iso/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upIsoGame.path, newpath + '/' + files.upIsoGame.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upIsoGame.length; i++) {
                            fs.rename(files.upIsoGame[i].path, __dirname + '/storage/games/iso/' + files.upIsoGame[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/games/iso/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upIsoGame.length; i++) {
                            fs.rename(files.upIsoGame[i].path, newpath + '/' + files.upIsoGame[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-game');
});

// uploaded game
app.get('/uploaded-game', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-game.html');
});

// upload apk
app.post('/upload-apk', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 5000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upApkApp != undefined) {
            if (files.upApkApp[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upApkApp.path, __dirname + '/storage/applications/apk/' + files.upApkApp.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/applications/apk/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upApkApp.path, newpath + '/' + files.upApkApp.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upApkApp.length; i++) {
                            fs.rename(files.upApkApp[i].path, __dirname + '/storage/applications/apk/' + files.upApkApp[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/applications/apk/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upApkApp.length; i++) {
                            fs.rename(files.upApkApp[i].path, newpath + '/' + files.upApkApp[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
        else if (files.upCompressedApp != undefined) {
            if (files.upCompressedApp[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upCompressedApp.path, __dirname + '/storage/applications/compressed/' + files.upCompressedApp.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/applications/compressed/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upCompressedApp.path, newpath + '/' + files.upCompressedApp.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upCompressedApp.length; i++) {
                            fs.rename(files.upCompressedApp[i].path, __dirname + '/storage/applications/compressed/' + files.upCompressedApp[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/applications/compressed/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upCompressedApp.length; i++) {
                            fs.rename(files.upCompressedApp[i].path, newpath + '/' + files.upCompressedApp[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-apk');
    });

// uploaded apk
app.get('/uploaded-apk', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-apk.html');
});

// upload other
app.post('/upload-book', function (req, res) {
    const form = formidable({ multiples: true, keepExtensions: true, maxFileSize: 2000 * 1024 * 1024 });
    form.parse(req, function(err, fields, files) {
        console.log('fields:', fields);
        console.log('files:', files);
        if (files.upCompressedOther != undefined) {
            if (files.upCompressedOther[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upCompressedOther.path, __dirname + '/storage/others/compressed/' + files.upCompressedOther.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/others/compressed/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upCompressedOther.path, newpath + '/' + files.upCompressedOther.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upCompressedOther.length; i++) {
                            fs.rename(files.upCompressedOther[i].path, __dirname + '/storage/others/compressed/' + files.upCompressedOther[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/others/compressed/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upCompressedOther.length; i++) {
                            fs.rename(files.upCompressedOther[i].path, newpath + '/' + files.upCompressedOther[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
        else if (files.upIsoOther != undefined) {
            if (files.upIsoOther[1] == undefined) {
                if (fields.folderName == undefined) {
                    fs.rename(files.upIsoOther.path, __dirname + '/storage/others/compressed/' + files.upIsoOther.name, function (err) {
                        if (err) throw err;
                    });
                }
                else {
                    let newpath = __dirname + '/storage/others/compressed/' + fields.folderName;
                    if (!fs.existsSync(newpath)){
                        fs.mkdirSync(newpath);
                    }
                    console.log(newpath);
                    fs.rename(files.upIsoOther.path, newpath + '/' + files.upIsoOther.name, function (err) {
                        if (err) throw err;
                    });
                }
            }
            else {
                if (fields.folderName != undefined) {
                    if (fields.folderName.length < 1) {
                        for (let i = 0; i < files.upIsoOther.length; i++) {
                            fs.rename(files.upIsoOther[i].path, __dirname + '/storage/others/compressed/' + files.upIsoOther[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                    else {
                        let newpath = __dirname + '/storage/others/compressed/' + fields.folderName;
                        if (!fs.existsSync(newpath)){
                            fs.mkdirSync(newpath);
                        }
                        console.log(newpath);
                        for (let i = 0; i < files.upIsoOther.length; i++) {
                            fs.rename(files.upIsoOther[i].path, newpath + '/' + files.upIsoOther[i].name, function (err) {
                                if (err) throw err;
                            });
                        }
                    }
                }
            }
        }
    });
    res.redirect('/uploaded-book');
});

// uploaded other
app.get('/uploaded-other', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/uploaded/uploaded-other.html');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// delete page
app.get('/delete-files', function(req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/delete-files.html');
});

// delete video
app.post('/delete-video', function (req, res) {
    let dlVideo = req.body.dlVideo;
    let videoPath = 'C:\\storage\\Projects\\Programmation\\Web Developpement\\Mean Stack\\file-manager\\storage\\videos\\' + dlVideo;
    fs.unlink(videoPath, function (err) {
        if (err) throw err;
        console.log(videoPath + ' is deleted');
    });
    res.redirect('/deleted-video');
});

// deleted video
app.get('/deleted-video', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/deleted/delete-video.html')
});

// delete audio
app.post('/delete-audio', function (req, res) {
    let dlAudio = req.body.dlAudio;
    let audioPath = 'C:\\storage\\Projects\\Programmation\\Web Developpement\\Mean Stack\\file-manager\\storage\\audios\\' + dlAudio;
    fs.unlink(audioPath, function (err) {
        if (err) throw err;
        console.log(audioPath + ' is deleted');
    });
    res.redirect('/deleted-audio');
});

// deleted audio
app.get('/deleted-audio', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/deleted/delete-audio.html')
});

// delete image
app.post('/delete-image', function (req, res) {
    let dlImage = req.body.dlImage;
    let imagePath = 'C:\\storage\\Projects\\Programmation\\Web Developpement\\Mean Stack\\file-manager\\storage\\images\\' + dlImage;
    fs.unlink(imagePath, function (err) {
        if (err) throw err;
        console.log(imagePath + ' is deleted');
    });
    res.redirect('/deleted-image');
});

// deleted image
app.get('/deleted-image', function (req, res) {
    res.sendFile(__dirname + '/code/webpages/upload-delete/deleted/delete-image.html')
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// app listen
const port = 3000;
app.listen(port, function () {
    console.log('app listening at port: ' + port)
});

// errors handling
const errorsHandling = require("./errorsHandling");
app.use(errorsHandling.onError404);
app.use(errorsHandling.onError500);