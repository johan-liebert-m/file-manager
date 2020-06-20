function setVideo(src, title) {
    document.getElementById("video-title").innerHTML = title;
    document.getElementById("video-source").setAttribute("src", src);
    document.getElementById("video").load();
}
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
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
        setVideo("/videos/" + a.innerHTML, a.innerHTML);
    });
    li.addEventListener("click", function() {
        setVideo("/videos/" + a.innerHTML, a.innerHTML);
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
            setVideo("/videos/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML);
        });
        sLI.addEventListener("click", function() {
            setVideo("/videos/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML);
        });
        sLI.appendChild(sA);
        sUL.appendChild(sLI);
    }
    ul.appendChild(fLI);
    ul.appendChild(sUL);
}
manager.appendChild(ul);
