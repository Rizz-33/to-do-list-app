document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add-todo");
  const inputField = document.getElementById("input-todo");
  const container = document.querySelector(".container");

  function createTodoItem(todoText) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoPara = document.createElement("p");
    todoPara.classList.add("todo-p");
    todoPara.textContent = todoText;

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const deleteButton = document.createElement("a");
    deleteButton.setAttribute("href", "#");

    const deleteImg = document.createElement("img");
    deleteImg.setAttribute("src", "assets/delete.png");
    deleteImg.setAttribute("alt", "Dustbin Icon");
    deleteImg.setAttribute("width", "30px");

    deleteButton.appendChild(deleteImg);

    actionsDiv.appendChild(checkbox);
    actionsDiv.appendChild(deleteButton);

    todoDiv.appendChild(todoPara);
    todoDiv.appendChild(actionsDiv);

    container.appendChild(todoDiv);
  }

  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    const todoText = inputField.value.trim();
    if (todoText !== "") {
      createTodoItem(todoText);
      inputField.value = "";
    }
  });

  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const todoText = inputField.value.trim();
      if (todoText !== "") {
        createTodoItem(todoText);
        inputField.value = "";
      }
    }
  });

  container.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      const todoItem = e.target.closest(".todo");
      todoItem.remove();
    }
  });
});
