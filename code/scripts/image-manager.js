let displayedImg = null;
function setImage(src, title, imgLI) {
    document.getElementById("image-title").innerHTML = title;
    document.getElementById("image-source").setAttribute("src", src);
    displayedImg = imgLI;
}
let manager = document.getElementById("manager");
let ul = document.createElement("ul");
ul.setAttribute("id", "managerUL");
ul.setAttribute("class", "list-group");
for (let i = 0; i < images.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    let a = document.createElement("a");
    a.setAttribute("title", images[i]);
    a.innerHTML = images[i];
    a.addEventListener("click", function() {
        setImage("/images/" + a.innerHTML, a.innerHTML, li);
    });
    li.addEventListener("click", function() {
        setImage("/images/" + a.innerHTML, a.innerHTML, li);
    });
    li.appendChild(a);
    ul.appendChild(li);
}
function openCloseFolder(folder) {
    if (folder.nextSibling.childNodes.length != 0) {
        if (folder.nextSibling.classList.contains("sub-images-hidden")) {
            folder.nextSibling.classList.remove("sub-images-hidden");
            folder.nextSibling.classList.add("sub-images-displayed");
            folder.childNodes[1].className = "fa fa-arrow-up";
        }
        else if (folder.nextSibling.classList.contains("sub-images-displayed")) {
            folder.nextSibling.classList.remove("sub-images-displayed");
            folder.nextSibling.classList.add("sub-images-hidden");
            folder.childNodes[1].className = "fa fa-arrow-down";
        }
    }
}
for (let i = 0; i < directoriesNames.length; i++) {
    let fLI = document.createElement("li");
    let arrow = document.createElement("i");
    arrow.setAttribute("class", "fa fa-arrow-down");
    arrow.setAttribute("style", "float: right");
    fLI.addEventListener("click", function() {
        openCloseFolder(fLI);
    });
    fLI.setAttribute("class", "list-group-item");
    fLI.setAttribute("style", "color: black");
    fLI.innerHTML = directoriesNames[i];
    fLI.appendChild(arrow);
    fLI.setAttribute("data-toggle", "collapse");
    fLI.setAttribute("data-target", "#f" + i);
    let sUL = document.createElement("ul");
    sUL.setAttribute("class", "list-groupe sub-images-hidden collapse");
    sUL.setAttribute("id", "f" + i);
    for (let j = 0; j < directoriesImages[i].length; j++) {
        let sLI = document.createElement("li");
        sLI.setAttribute("id", "f" + i + "i" + j);
        sLI.setAttribute("class", "list-group-item");
        let sA = document.createElement("a");
        sA.setAttribute("title", directoriesImages[i][j]);
        sA.innerHTML = directoriesImages[i][j];
        sA.addEventListener("click", function() {
            setImage("/images/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
        });
        sLI.addEventListener("click", function() {
            setImage("/images/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
        });
        sLI.appendChild(sA);
        sUL.appendChild(sLI);
    }
    ul.appendChild(fLI);
    ul.appendChild(sUL);
}
manager.appendChild(ul);

function next() {
    document.getElementById("image-source").style.transform = "scale(1)";
    zoom = 1;
    rotate = 0;
    if (displayedImg != null) {
        if ((displayedImg.nextSibling != null && displayedImg.parentNode.id != "managerUL") || (displayedImg.nextSibling != null && displayedImg.nextSibling.getAttribute("data-toggle") != "collapse")) {
            displayedImg.nextSibling.click();
        }
    }
}

function previous() {
    document.getElementById("image-source").style.transform = "scale(1)";
    zoom = 1;
    rotate = 0;
    if (displayedImg != null) {
        if ((displayedImg.previousSibling != null && displayedImg.parentNode.id != "managerUL") || (displayedImg.previousSibling != null && displayedImg.previousSibling.getAttribute("data-toggle") != "collapse")) {
            if (displayedImg.previousSibling != null) {
                displayedImg.previousSibling.click();
            }
        }
    }
}

let zoom = 1;
function zoomIn() {
    let image = document.getElementById("image-source");
    switch (zoom) {
        case 0.1:
        image.style.transform = "scale(0.2)";
        zoom = 0.2;
        break;
        case 0.2:
        image.style.transform = "scale(0.3)";
        zoom = 0.3;
        break;
        case 0.3:
        image.style.transform = "scale(0.4)";
        zoom = 0.4;
        break;
        case 0.4:
        image.style.transform = "scale(0.5)";
        zoom = 0.5;
        break;
        case 0.5:
        image.style.transform = "scale(0.6)";
        zoom = 0.6;
        break;
        case 0.6:
        image.style.transform = "scale(0.7)";
        zoom = 0.7;
        break;
        case 0.7:
        image.style.transform = "scale(0.8)";
        zoom = 0.8;
        break;
        case 0.8:
        image.style.transform = "scale(0.9)";
        zoom = 0.9;
        break;
        case 0.9:
        image.style.transform = "scale(1)";
        zoom = 1;
        break;
        case 1:
        image.style.transform = "scale(1.1)";
        zoom = 1.1;
        break;
        case 1.1:
        image.style.transform = "scale(1.2)";
        zoom = 1.2;
        break;
        case 1.2:
        image.style.transform = "scale(1.3)";
        zoom = 1.3;
        break;
        case 1.3:
        image.style.transform = "scale(1.4)";
        zoom = 1.4;
        break;
        case 1.4:
        image.style.transform = "scale(1.5)";
        zoom = 1.5;
        break;
        case 1.5:
        image.style.transform = "scale(1.6)";
        zoom = 1.6;
        break;
        case 1.6:
        image.style.transform = "scale(1.7)";
        zoom = 1.7;
        break;
        case 1.7:
        image.style.transform = "scale(1.8)";
        zoom = 1.8;
        break;
        case 1.8:
        image.style.transform = "scale(1.9)";
        zoom = 1.9;
        break;
        case 1.9:
        image.style.transform = "scale(2)";
        zoom = 2;
        break;
    }
}

function zoomOut() {
    let image = document.getElementById("image-source");
    switch (zoom) {
        case 0.2:
        image.style.transform = "scale(0.1)";
        zoom = 0.1;
        break;
        case 0.3:
        image.style.transform = "scale(0.2)";
        zoom = 0.2;
        break;
        case 0.4:
        image.style.transform = "scale(0.3)";
        zoom = 0.3;
        break;
        case 0.5:
        image.style.transform = "scale(0.4)";
        zoom = 0.4;
        break;
        case 0.6:
        image.style.transform = "scale(0.5)";
        zoom = 0.5;
        break;
        case 0.7:
        image.style.transform = "scale(0.6)";
        zoom = 0.6;
        break;
        case 0.8:
        image.style.transform = "scale(0.7)";
        zoom = 0.7;
        break;
        case 0.9:
        image.style.transform = "scale(0.8)";
        zoom = 0.8;
        break;
        case 1:
        image.style.transform = "scale(0.9)";
        zoom = 0.9;
        break;
        case 1.1:
        image.style.transform = "scale(1)";
        zoom = 1;
        break;
        case 1.2:
        image.style.transform = "scale(1.1)";
        zoom = 1.1;
        break;
        case 1.3:
        image.style.transform = "scale(1.2)";
        zoom = 1.2;
        break;
        case 1.4:
        image.style.transform = "scale(1.3)";
        zoom = 1.3;
        break;
        case 1.5:
        image.style.transform = "scale(1.4)";
        zoom = 1.4;
        break;
        case 1.6:
        image.style.transform = "scale(1.5)";
        zoom = 1.5;
        break;
        case 1.7:
        image.style.transform = "scale(1.6)";
        zoom = 1.6;
        break;
        case 1.8:
        image.style.transform = "scale(1.7)";
        zoom = 1.7;
        break;
        case 1.9:
        image.style.transform = "scale(1.8)";
        zoom = 1.8;
        break;
        case 2:
        image.style.transform = "scale(1.9)";
        zoom = 1.9;
        break;
    }
}

let rotate = 0;
function rotateRight() {
    let image = document.getElementById("image-source");
    switch (rotate) {
        case 0:
        image.style.transform = "rotate(90deg)";
        rotate = 90;
        break;
        case 90:
        image.style.transform = "rotate(180deg)";
        rotate = 180;
        break;
        case 180:
        image.style.transform = "rotate(270deg)";
        rotate = 270;
        break;
        case 270:
        image.style.transform = "rotate(0deg)";
        rotate = 0;
        break;
    }
}

function rotateLeft() {
    let image = document.getElementById("image-source");
    switch (rotate) {
        case 0:
        image.style.transform = "rotate(270deg)";
        rotate = 270;
        break;
        case 90:
        image.style.transform = "rotate(0deg)";
        rotate = 0;
        break;
        case 180:
        image.style.transform = "rotate(90deg)";
        rotate = 90;
        break;
        case 270:
        image.style.transform = "rotate(180deg)";
        rotate = 180;
        break;
    }
}

// keypress
document.addEventListener("keydown", function(event) {
    if (event.which == 37) {
        previous();
    }
    else if (event.which == 39) {
        next();
    }
    else if (event.which == 107) {
        zoomIn();
    }
    else if (event.which == 109) {
        zoomOut();
    }
    else if (event.which == 46) {
        showDeleteImagePopper();
    }
});

function showDeleteImagePopper() {
    if (document.getElementById("image-source").getAttribute("src") != "/images/welcome.jpg") {
        document.getElementById("delete-image-popper-container").style.visibility = "visible";
        document.getElementById("delete-image-popper").style.transform = "translate(-50%, -50%) scale(1)";
    }
}

document.getElementById("delete-icon").addEventListener("click", showDeleteImagePopper);

function deleteIconSize(x) {
	if (x.matches) {
    	document.getElementById("delete-icon").style.fontSize = "6.5vw";
	} else {
		document.getElementById("delete-icon").style.fontSize = "4vw";
	}
}

let x = window.matchMedia("(max-width: 900px)");
deleteIconSize(x);
x.addListener(deleteIconSize);

function hideDeleteImagePopper() {
    document.getElementById("delete-image-popper-container").style.visibility = "hidden";
    document.getElementById("delete-image-popper").style.transform = "translate(-50%, -50%) scale(0)";
}

function deleteImage() {
    $.post("/delete-image",
    {
        imgSrc: document.getElementById("image-source").getAttribute("src")
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    document.getElementById("hideDeleteImage").click();
    let deletedImg = displayedImg
    if (displayedImg.nextSibling != null) {
        displayedImg.nextSibling.click()
    }
    else if (displayedImg.previousSibling != null){
        displayedImg.previousSibling.click();
    }
    else {
        document.getElementById("image-source").setAttribute("src", "/images/welcome.jpg");
        document.getElementById("image-title").innerHTML = "No image is displayed";
        deletedImg.parentNode.previousSibling.childNodes[1].className = "fa fa-arrow-down";
    }
    deletedImg.remove();
    deletedImg = null;
}
