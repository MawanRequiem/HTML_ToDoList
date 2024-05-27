var addbutton = document.getElementById("submit-button");
addbutton.addEventListener("click",addToDoItem);

function addToDoItem() {
    alert("Submit Button Clicked");
}

var toDoInputBox = document.getElementById("form-box");
var toDoList = document.getElementById("list-todo");

function newToDoList(itemText, completed){
    var toDoList = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if(completed){
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblClick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoInputBox.value;
    newToDoList(itemText, false);
}

function toggleToDoItemState() {
    if(this.classList.contains("completed")){
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}