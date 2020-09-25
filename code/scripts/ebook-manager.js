let book = null;
let FBook = null;
let manager = document.getElementById("manager");
let div = document.createElement("div");
div.setAttribute("class", "container-fluid");
for (let i = 0; i < ebooks.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary book-btn");
    let a = document.createElement("a");
    a.setAttribute("title", ebooks[i]);
    a.innerHTML = ebooks[i];
    btn.addEventListener("click", function() {
        book = a;
        showBookPopper();
    });
    btn.appendChild(a);
    div.appendChild(btn);
}
for (let i = 0; i < directoriesNames.length; i++) {
    let dropdown = document.createElement("div");
    dropdown.setAttribute("style", "display: inline-block; margin: 5px");
    dropdown.setAttribute("class", "dropdown");
    let fBTN = document.createElement("button");
    fBTN.setAttribute("class", "btn btn-info dropdown-toggle");
    fBTN.setAttribute("data-toggle", "dropdown");
    fBTN.setAttribute("style", "color: white");
    fBTN.innerHTML = directoriesNames[i];
    let dropdownMenu = document.createElement("div");
    dropdownMenu.setAttribute("class", "dropdown-menu");
    for (let j = 0; j < directoriesEbooks[i].length; j++) {
        let sA = document.createElement("a");
        sA.setAttribute("class", "dropdown-item");
        sA.setAttribute("title", directoriesEbooks[i][j]);
        sA.innerHTML = directoriesEbooks[i][j];
        sA.addEventListener("click", function() {
            FBook = sA;
            folderName = fBTN.innerHTML;
            showFBookPopper();
        });
        sA.setAttribute("style", "cursor: pointer");
        dropdownMenu.appendChild(sA);
    }
    dropdown.appendChild(fBTN);
    dropdown.appendChild(dropdownMenu);
    div.appendChild(dropdown);
}
manager.appendChild(div);

// keypress
document.addEventListener("keydown", function(event) {
    if (event.which == 46) {
        showBookPopper();
    }
});

function showBookPopper() {
    document.body.style.overflow = "hidden";
    document.getElementById("book-popper-container").style.visibility = "visible";
    document.getElementById("book-popper").style.transform = "translate(-65%, -50%) scale(1)";
}

function hideBookPopper() {
    document.body.style.overflow = "auto";
    document.getElementById("book-popper-container").style.visibility = "hidden";
    document.getElementById("book-popper").style.transform = "translate(-65%, -50%) scale(0)";
}

function downloadBook() {
    window.open("/books/ebook/" + book.innerHTML);
}

function deleteBook() {
    $.post("/delete-book",
    {
        bookSrc: "/books/ebook/" + book.innerHTML
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    document.getElementById("hideBook").click();
    book.parentElement.remove();
}

//////////

function showFBookPopper() {
    document.body.style.overflow = "hidden";
    document.getElementById("FBook-popper-container").style.visibility = "visible";
    document.getElementById("FBook-popper").style.transform = "translate(-65%, -50%) scale(1)";
}

function hideFBookPopper() {
    document.body.style.overflow = "auto";
    document.getElementById("FBook-popper-container").style.visibility = "hidden";
    document.getElementById("FBook-popper").style.transform = "translate(-65%, -50%) scale(0)";
}

function downloadFBook() {
    window.open("/books/ebook/" + folderName + "/" + FBook.innerHTML);
}

function deleteFBook() {
    if (FBook.parentElement.childNodes.length != 1) {
        $.post("/delete-book",
        {
            bookSrc: "/books/ebook/" + folderName + "/" + FBook.innerHTML
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
        document.getElementById("hideFBook").click();
        FBook.remove();    
    }
    else {
        $.post("/delete-book",
        {
            bookFolder: "/books/ebook/" + folderName,
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
        document.getElementById("hideFBook").click();
        FBook.parentElement.parentElement.remove();
    }
    
}
