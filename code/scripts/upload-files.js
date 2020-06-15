// to choose the type of the uploaded file

function bookTypeChange(s) {
    let book = document.getElementById("upBook");
    if (s.value == "PDF") {
        book.accept = "application/pdf";
        book.name = "upPdf";
    }
    else if (s.value == "eBook") {
        book.accept = ".epub";
        book.name = "upEbook";
    }
}

function softwareTypeChange(s) {
    let software = document.getElementById("software");
    if (s.value == "Compressed") {
        software.accept = ".zip, .rar, 7z";
        software.name = "upCompressedSoftware";
    }
    else if (s.value == "ISO") {
        software.accept = ".iso";
        software.name = "upIsoSoftware";
    }
}

function gameTypeChange(s) {
    let game = document.getElementById("game");
    if (s.value == "Compressed") {
        game.accept = ".zip, .rar, 7z";
        game.name = "upCompressedGame";
    }
    else if (s.value == "ISO") {
        game.accept = ".iso";
        game.name = "upIsoGame";
    }
}

function apkTypeChange(s) {
    let apk = document.getElementById("apk");
    if (s.value == "Apk") {
        apk.accept = ".apk";
        apk.name = "upApkApp";
    }
    else if (s.value == "Compressed") {
        apk.accept = ".zip, .rar, 7z";
        apk.name = "upCompressedApp";
    }
}

function otherTypeChange(s) {
    let other = document.getElementById("other");
    if (s.value == "Compressed") {
        other.accept = ".zip, .rar, 7z";
        other.name = "upCompressedOther";
    }
    else if (s.value == "ISO") {
        other.accept = ".iso";
        other.name = "upIsoOther";
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// to create a list of the existing folders

function useExistingFolder(f, s) {
    f.getElementsByClassName("folderName")[0].value = s.value;
}

function createFolderSelect(folders, formId, childToRemove, insertBefore) {
    let form = document.getElementById(formId);
    form.childNodes[childToRemove].remove();
    let select = document.createElement("select");
    for (let i = 0; i < folders.length; i++) {
        let folder = document.createElement("option");
        let folderName = document.createTextNode(folders[i]);
        folder.appendChild(folderName);
        select.appendChild(folder);
    }
    select.setAttribute("class", "form-control");
    select.addEventListener("change", function () {
        useExistingFolder(form, select);
    });
    form.insertBefore(select, form.childNodes[insertBefore]);
}

createFolderSelect(videosFolders, "videos", 3, 6);
createFolderSelect(audiosFolders, "audios", 3, 6);
createFolderSelect(imagesFolders, "images", 3, 6);

createFolderSelect(pdfsFolders, "books", 13, 13);
let bookType = document.getElementById("bookType");
bookType.addEventListener("change", function () {
    if (bookType.value == "PDF") {
        createFolderSelect(pdfsFolders, "books", 13, 13);
    }
    else if (bookType.value == "eBook") {
        createFolderSelect(ebooksFolders, "books", 13, 13);
    }
});

createFolderSelect(compressedSoftwaresFolders, "softwares", 13, 13);
let softwareType = document.getElementById("softwareType");
softwareType.addEventListener("change", function () {
    if (softwareType.value == "Compressed") {
        createFolderSelect(compressedSoftwaresFolders, "softwares", 13, 13);
    }
    else if (softwareType.value == "ISO") {
        createFolderSelect(isoSoftwaresFolders, "softwares", 13, 13);
    }
});

createFolderSelect(compressedGamesFolders, "games", 13, 13);
let gameType = document.getElementById("gameType");
gameType.addEventListener("change", function () {
    if (gameType.value == "Compressed") {
        createFolderSelect(compressedGamesFolders, "games", 13, 13);
    }
    else if (gameType.value == "ISO") {
        createFolderSelect(isoGamesFolders, "games", 13, 13);
    }
});

createFolderSelect(apkAppsFolders, "apps", 13, 13);
let appType = document.getElementById("appType");
appType.addEventListener("change", function () {
    if (appType.value == "Apk") {
        createFolderSelect(apkAppsFolders, "apps", 13, 13);
    }
    else if (appType.value == "Compressed") {
        createFolderSelect(compressedAppsFolders, "apps", 13, 13);
    }
});

createFolderSelect(compressedOthersFolders, "others", 13, 13);
let otherType = document.getElementById("otherType");
otherType.addEventListener("change", function () {
    if (otherType.value == "Compressed") {
        createFolderSelect(compressedOthersFolders, "others", 13, 13);
    }
    else if (otherType.value == "ISO") {
        createFolderSelect(isoOthersFolders, "others", 13, 13);
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// limit the upload size

function limitSize(uploader, maxSize, section) {
    let totalSize = 0;
    for (let i = 0; i < uploader.files.length; i++) {
        totalSize += uploader.files[i].size;
    }
    if(totalSize > maxSize * 1024 * 1024){
        alert("the maximum size to upload in the " + section + " section is " + maxSize + "MB");
        uploader.value = "";
    }
}

let upVideo = document.getElementById("upVideo");

upVideo.onchange = function() {
    limitSize(upVideo, 20000, "videos");
};

let upAudio = document.getElementById("upAudio");

upAudio.onchange = function() {
    limitSize(upAudio, 2000, "audios");
};

let upImage = document.getElementById("upImage");

upImage.onchange = function() {
    limitSize(upImage, 5000, "images");
};

let upBook = document.getElementById("upBook");

upBook.onchange = function() {
    limitSize(upBook, 2000, "upBook");
};

let upSoftware = document.getElementById("software");

upSoftware.onchange = function() {
    limitSize(upSoftware, 40000, "softwares");
};

let upGame = document.getElementById("game");

upGame.onchange = function() {
    limitSize(upGame, 40000, "games");
};

let upApp = document.getElementById("apk");

upApp.onchange = function() {
    limitSize(upApp, 5000, "applications");
};

let upOther = document.getElementById("other");

upOther.onchange = function() {
    limitSize(upOther, 5000, "others");
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
