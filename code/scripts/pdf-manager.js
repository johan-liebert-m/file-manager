let displayedBook = null;
let displayedBookFolderName = null;
function setBook(src, title, bookLI) {
    document.getElementById("book-title").innerHTML = title;
    document.getElementById("book-source").setAttribute("src", src);
    displayedBook = bookLI;
}
let manager = document.getElementById("manager");
let ul = document.createElement("ul");
ul.setAttribute("class", "list-group");
for (let i = 0; i < pdfs.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    let a = document.createElement("a");
    a.setAttribute("title", pdfs[i]);
    a.innerHTML = pdfs[i];
    a.addEventListener("click", function() {
        setBook("/books/pdf/" + a.innerHTML, a.innerHTML, li);
        displayedBookFolderName = null;
    });
    li.addEventListener("click", function() {
        setBook("/books/pdf/" + a.innerHTML, a.innerHTML, li);
        displayedBookFolderName = null;
    });
    li.appendChild(a);
    ul.appendChild(li);
}
function openCloseFolder(folder) {
    if (folder.nextSibling.childNodes.length != 0) {
        if (folder.nextSibling.classList.contains("sub-pdfs-hidden")) {
            folder.nextSibling.classList.remove("sub-pdfs-hidden");
            folder.nextSibling.classList.add("sub-pdfs-displayed");
            folder.childNodes[1].className = "fa fa-arrow-up";
        }
        else if (folder.nextSibling.classList.contains("sub-pdfs-displayed")) {
            folder.nextSibling.classList.remove("sub-pdfs-displayed");
            folder.nextSibling.classList.add("sub-pdfs-hidden");
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
    sUL.setAttribute("class", "list-groupe sub-pdfs-hidden collapse");
    sUL.setAttribute("id", "f" + i);
    for (let j = 0; j < directoriesPdfs[i].length; j++) {
        let sLI = document.createElement("li");
        sLI.setAttribute("class", "list-group-item");
        let sA = document.createElement("a");
        sA.setAttribute("title", directoriesPdfs[i][j]);
        sA.innerHTML = directoriesPdfs[i][j];
        sA.addEventListener("click", function() {
            setBook("/books/pdf/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
            displayedBookFolderName = directoriesNames[i];
        });
        sLI.addEventListener("click", function() {
            setBook("/books/pdf/" + directoriesNames[i] + "/" + sA.innerHTML, sA.innerHTML, sLI);
            displayedBookFolderName = directoriesNames[i];
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
        showDeleteBookPopper();
    }
});

function showDeleteBookPopper() {
    if (displayedBook != null) {
        document.getElementById("delete-book-popper-container").style.visibility = "visible";
        document.getElementById("delete-book-popper").style.transform = "translate(-50%, -50%) scale(1)";
    }
}

document.getElementById("delete-icon").addEventListener("click", showDeleteBookPopper);

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

function hideDeleteBookPopper() {
    document.getElementById("delete-book-popper-container").style.visibility = "hidden";
    document.getElementById("delete-book-popper").style.transform = "translate(-50%, -50%) scale(0)";
}

function graphicDelete() {
    let deletedBook = displayedBook
    if (displayedBook.nextSibling != null) {
        displayedBook.nextSibling.click()
    }
    else if (displayedBook.previousSibling != null){
        displayedBook.previousSibling.click();
    }
    else {
        document.getElementById("book-source").setAttribute("src", "/books/pdf/welcome.jpg");
        document.getElementById("book-title").innerHTML = "No book is displayed";
        deletedBook.parentNode.previousSibling.childNodes[1].className = "fa fa-arrow-down";
    }
    deletedBook.remove();
    deletedBook = null;
}

function deleteBook() {
    if (displayedBook != null) {
        if (displayedBook.parentElement.parentElement.tagName != "div") {
            if (displayedBook.parentElement.childNodes.length != 1) {
                $.post("/delete-book",
                {
                    bookSrc: document.getElementById("book-source").getAttribute("src"),
                },
                function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
                graphicDelete();            
            }
            else {
                $.post("/delete-book",
                {
                    bookFolder: "/books/pdf/" + displayedBookFolderName,
                },
                function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                });
                document.getElementById("book-source").setAttribute("src", "/pdfs/welcome.pdf");
                document.getElementById("book-title").innerHTML = "No book is displayed";   
                displayedBook.parentElement.previousSibling.remove();
                displayedBook.parentElement.remove();
                displayedBook = null;                     
            }
        }
        else {
            $.post("/delete-book",
            {
                bookSrc: document.getElementById("book-source").getAttribute("src"),
            },
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
            graphicDelete();     
        }
    }  
    hideDeleteBookPopper();  
}

