var addbutton = document.getElementById("submit-button");
addbutton.addEventListener("click", function(event) {
    event.preventDefault();
    addToDoItem();
});

var toDoInputBox = document.getElementById("form-box");
var toDoList = document.getElementById("list-todo");

function newToDoList(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoInputBox.value;
    if (itemText.trim() !== "") {
        newToDoList(itemText, false);
        toDoInputBox.value = "";
    }
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
}

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("List saved to localStorage");
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoList(toDo.task, toDo.completed);
        }
    }
}

loadList();


