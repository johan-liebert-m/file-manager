let displayedVideo = null;
let displayedVideoFolderName = null;
function setVideo(src, title, videoLI) {
    document.getElementById("video-title").innerHTML = title;
    document.getElementById("video-source").setAttribute("src", src);
    document.getElementById("video").load();
    displayedVideo = videoLI;
}
let manager = document.getElementById("manager");
let ul = document.createElement("ul");
ul.setAttribute("class", "list-group");
for (let i = 0; i < videos.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    let a = document.createElement("a");
    a.setAttribute("title", videos[i]);
    a.innerHTML = videos[i];
    a.addEventListener("click", function() {
        setVideo("/videos/" + a.innerHTML, a.innerHTML, li);
        displayedVideoFolderName = null;
    });
    li.addEventListener("click", function() {
        setVideo("/videos/" + a.innerHTML, a.innerHTML, li);
        displayedVideoFolderName = null;
    });
    li.appendChild(a);
    ul.appendChild(li);
}
function openCloseFolder(folder) {
    if (folder.nextSibling.childNodes.length != 0) {
        if (folder.nextSibling.classList.contains("sub-videos-hidden")) {
            folder.nextSibling.classList.remove("sub-videos-hidden");
            folder.nextSibling.classList.add("sub-videos-displayed");
            folder.childNodes[1].className = "fa fa-arrow-up";
        }
        else if (folder.nextSibling.classList.contains("sub-videos-displayed")) {
            folder.nextSibling.classList.remove("sub-videos-displayed");
            folder.nextSibling.classList.add("sub-videos-hidden");
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
    sUL.setAttribute("class", "list-groupe sub-videos-hidden collapse");
    sUL.setAttribute("id", "f" + i);
    for (let j = 0; j < directoriesVideos[i].length; j++) {
        let sLI = document.createElement("li");
        sLI.setAttribute("class", "list-group-item");
        let sA = document.createElement("a");
        sA.setAttribute("title", directoriesVideos[i][j]);
        sA.innerHTML = directoriesVideos[i][j];
        sA.addEventListener("click", function() {
            setVideo("/videos/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
            displayedVideoFolderName = directoriesNames[i];
        });
        sLI.addEventListener("click", function() {
            setVideo("/videos/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
            displayedVideoFolderName = directoriesNames[i];
        });
        sLI.appendChild(sA);
        sUL.appendChild(sLI);
    }
    ul.appendChild(fLI);
    ul.appendChild(sUL);
}
manager.appendChild(ul);

// keypress
document.addEventListener("keydown", function(event) {
    if (event.which == 46) {
        showDeleteVideoPopper();
    }
});

function showDeleteVideoPopper() {
    if (document.getElementById("video-source").getAttribute("src") != "") {
        document.getElementById("delete-video-popper-container").style.visibility = "visible";
        document.getElementById("delete-video-popper").style.transform = "translate(-50%, -50%) scale(1)";
    }
}

document.getElementById("delete-icon").addEventListener("click", showDeleteVideoPopper);

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

function hideDeleteVideoPopper() {
    document.getElementById("delete-video-popper-container").style.visibility = "hidden";
    document.getElementById("delete-video-popper").style.transform = "translate(-50%, -50%) scale(0)";
}

function graphicDelete() {
    let deletedVideo = displayedVideo
    if (displayedVideo.nextSibling != null) {
        displayedVideo.nextSibling.click()
    }
    else if (displayedVideo.previousSibling != null){
        displayedVideo.previousSibling.click();
    }
    else {
        document.getElementById("video-title").innerHTML = "No video is displayed";
        deletedVideo.parentNode.previousSibling.childNodes[1].className = "fa fa-arrow-down";
    }
    deletedVideo.remove();
    deletedVideo = null;
}

function deleteVideo() {
    if (displayedVideo != null) {
        if (displayedVideo.parentElement.parentElement.tagName != "div") {
            if (displayedVideo.parentElement.childNodes.length != 1) {
                $.post("/delete-video",
                {
                    videoSrc: document.getElementById("video-source").getAttribute("src"),
                },
                function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
                graphicDelete();            
            }
            else {
                $.post("/delete-video",
                {
                    videoFolder: "/videos/" + displayedVideoFolderName,
                },
                function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
                document.getElementById("video-source").setAttribute("src", "");
                document.getElementById("video").load();
                document.getElementById("video-title").innerHTML = "No video is displayed";   
                displayedVideo.parentElement.previousSibling.remove();
                displayedVideo.parentElement.remove();
                displayedVideo = null;                     
            }
        }
        else {
            $.post("/delete-video",
            {
                videoSrc: document.getElementById("video-source").getAttribute("src"),
            },
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
            graphicDelete();     
        }
    }  
    hideDeleteVideoPopper();  
}
