"use strict";
var add = document.querySelector("#submit-btn");
console.log(add);
add.addEventListener("click", submitBooks);

function submitBooks(e) {
  e.preventDefault;

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var ISBN = document.getElementById("ISBN").value;
  console.log("title" + title);
  if (title == "" || author == "") {
    alert("Give atleast title and author name!");
  } else {
    //creat new element
    var addElement = document.createElement("tr");
    addElement.className = "newElement";

    var addtitle = document.createElement("td");
    addtitle.className = "addtd";

    var addauthor = document.createElement("td");
    addauthor.className = "addtd";

    var addISBN = document.createElement("td");
    addISBN.className = "addtd";

    //add title
    addtitle.appendChild(document.createTextNode(title));

    //add author
    addauthor.appendChild(document.createTextNode(author));

    //add isbn
    addISBN.appendChild(document.createTextNode(ISBN));

    addElement.appendChild(addtitle);
    addElement.appendChild(addauthor);
    addElement.appendChild(addISBN);

    var booklist = document.getElementById("book-list");
    booklist.appendChild(addElement);

    //add delete book button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btnX";
    deleteBtn.append(document.createTextNode("X"));
    addElement.appendChild(deleteBtn);
  }
}

var item = document.querySelector("#book-list");
item.addEventListener("click", deleteBook);

function deleteBook(e) {
  console.log(e.target.value);

  if (e.target.classList.contains("btnX")) {
    if (confirm("are You sure? ")) {
      var x = e.target.parentElement;
      console.log(x);
      item.removeChild(x);
    }
  }
}
