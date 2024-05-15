const todoContainer = document.querySelector(".todo-container");
const inputTodo = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo");

let todoArray = [];

const URL = "http://localhost:3000/todos";

async function get_Todos() {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error.message;
  }
}
