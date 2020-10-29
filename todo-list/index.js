//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelectorAll(".status button");

//Even Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption[0].addEventListener("click", filterTodo);
filterOption[1].addEventListener("click", filterTodo);
filterOption[2].addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //COMPLETE MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);

  //CLEAR TODO INPUT VALUE
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  //DELETE TODO
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    todo.classList.add("fall"); //remove opacity
    //special event listener
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //CHECK TODO
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  console.log(event.target);
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    if (todo.classList !== undefined) {
      switch (event.target.innerText.toLowerCase()) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}
