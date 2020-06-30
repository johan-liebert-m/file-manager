let displayedAudio = null;
function setAudio(src, title, audioLI) {
    document.getElementById("audio-title").innerHTML = title;
    document.getElementById("audio-source").setAttribute("src", src);
    document.getElementById("audio").load();
    displayedAudio = audioLI;
}
let manager = document.getElementById("manager");
let ul = document.createElement("ul");
ul.setAttribute("class", "list-group");
for (let i = 0; i < audios.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    let a = document.createElement("a");
    a.setAttribute("title", audios[i]);
    a.innerHTML = audios[i];
    a.addEventListener("click", function() {
        setAudio("/audios/" + a.innerHTML, a.innerHTML, li);
    });
    li.addEventListener("click", function() {
        setAudio("/audios/" + a.innerHTML, a.innerHTML, li);
    });
    li.appendChild(a);
    ul.appendChild(li);
}
function openCloseFolder(folder) {
    if (folder.nextSibling.childNodes.length != 0) {
        if (folder.nextSibling.classList.contains("sub-audios-hidden")) {
            folder.nextSibling.classList.remove("sub-audios-hidden");
            folder.nextSibling.classList.add("sub-audios-displayed");
            folder.childNodes[1].className = "fa fa-arrow-up";
        }
        else if (folder.nextSibling.classList.contains("sub-audios-displayed")) {
            folder.nextSibling.classList.remove("sub-audios-displayed");
            folder.nextSibling.classList.add("sub-audios-hidden");
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
    sUL.setAttribute("class", "list-groupe sub-audios-hidden collapse");
    sUL.setAttribute("id", "f" + i);
    for (let j = 0; j < directoriesAudios[i].length; j++) {
        let sLI = document.createElement("li");
        sLI.setAttribute("class", "list-group-item");
        let sA = document.createElement("a");
        sA.setAttribute("title", directoriesAudios[i][j]);
        sA.innerHTML = directoriesAudios[i][j];
        sA.addEventListener("click", function() {
            setAudio("/audios/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
        });
        sLI.addEventListener("click", function() {
            setAudio("/audios/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
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
        showDeleteAudioPopper();
    }
});

function showDeleteAudioPopper() {
    if (document.getElementById("audio-source").getAttribute("src") != "") {
        document.getElementById("delete-audio-popper-container").style.visibility = "visible";
        document.getElementById("delete-audio-popper").style.transform = "translate(-50%, -50%) scale(1)";
    }
}

document.getElementById("delete-icon").addEventListener("click", showDeleteAudioPopper);

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

function hideDeleteAudioPopper() {
    document.getElementById("delete-audio-popper-container").style.visibility = "hidden";
    document.getElementById("delete-audio-popper").style.transform = "translate(-50%, -50%) scale(0)";
}

function deleteAudio() {
    $.post("/delete-audio",
    {
        audioSrc: document.getElementById("audio-source").getAttribute("src")
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    document.getElementById("hideDeleteAudio").click();
    let deletedAudio = displayedAudio
    if (displayedAudio.nextSibling != null) {
        displayedAudio.nextSibling.click()
    }
    else if (displayedAudio.previousSibling != null){
        displayedAudio.previousSibling.click();
    }
    else {
        document.getElementById("audio-source").setAttribute("src", "/audios/welcome.jpg");
        document.getElementById("audio-title").innerHTML = "No audio is displayed";
        deletedAudio.parentNode.previousSibling.childNodes[1].className = "fa fa-arrow-down";
    }
    deletedAudio.remove();
    deletedAudio = null;
}
