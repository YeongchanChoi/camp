const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const keyCodeCheck = () => {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
    saveItemsFn();
  }
};

const createTodo = () => {
  const todoList = document.getElementById("todo-list");
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
  });

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
};

const saveItemsFn = () => {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }
  console.log(saveItems);
};
