document.addEventListener("DOMContentLoaded", () => {
  const todoContainer = document.querySelector(".todo-container");
  const inputTodo = document.getElementById("input-todo");
  const addTodo = document.querySelector(".add-todo");

  let todoArray = [];

  const URL = "http://localhost:3000/todos";

  async function getTodos() {
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }

  async function postTodo() {
    try {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: inputTodo.value,
          completed: false,
        }),
      };
      const resp = await fetch(URL, options);
      const data = await resp.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }

  async function deleteTodo(todoElement) {
    try {
      const del_url = URL + "/" + todoElement.id;
      console.log(del_url);
      const options = {
        method: "DELETE",
      };
      const resp = await fetch(del_url, options);
      const data = await resp.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }

  function displayTodos(todoArray) {
    todoArray.forEach((todoElement) => {
      console.log(todoElement);

      let todo = document.createElement("div");
      todo.classList.add("todo");

      let todoInfo = document.createElement("div");
      todoInfo.classList.add("todo-info");
      let todoBtn = document.createElement("div");
      todoBtn.classList.add("todo-img");

      let todoCompleted = document.createElement("input");
      todoCompleted.classList.add("todo-completed");
      todoCompleted.setAttribute("type", "checkbox");
      todoCompleted.checked = todoElement.completed;
      let todoName = document.createElement("p");
      todoName.classList.add("todo-name");
      todoName.innerHTML = todoElement.title;

      let todoEdit = document.createElement("a");
      todoEdit.classList.add("todo-edit");
      let editImg = document.createElement("img");
      editImg.src = "assets/edit.png";
      editImg.alt = "Edit Icon";
      editImg.width = "30";
      todoEdit.appendChild(editImg);
      todoEdit.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Open Model");
      });

      let todoDelete = document.createElement("a");
      todoDelete.classList.add("todo-delete");
      let deleteImg = document.createElement("img");
      deleteImg.src = "assets/delete.png";
      deleteImg.alt = "Delete Icon";
      deleteImg.width = "28";
      todoDelete.appendChild(deleteImg);
      todoDelete.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Delete Todo");
        deleteTodo(todoElement);
      });

      todoInfo.appendChild(todoCompleted);
      todoInfo.appendChild(todoName);
      todoBtn.appendChild(todoEdit);
      todoBtn.appendChild(todoDelete);
      todo.appendChild(todoInfo);
      todo.appendChild(todoBtn);
      todoContainer.appendChild(todo);
    });
  }

  getTodos()
    .then((todos) => {
      todoArray = todos;
      console.log(todoArray);
      displayTodos(todoArray);
    })
    .catch((error) => {
      console.log(error.message);
    });

  addTodo.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputTodo.value.trim() !== "") {
      postTodo();
    }
  });
});
