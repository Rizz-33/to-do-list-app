const express = require("express");
const app = express();
const uuid = require("uuid");

const PORT = 3000;

app.use(express.json());

const todos = [
  {
    id: 1,
    title: "Learn Express",
    completed: true,
  },
  {
    id: 2,
    title: "Learn Golang",
    completed: false,
  },
  {
    id: 3,
    title: "Learn   Django",
    completed: true,
  },
];

//home
app.get("/", (req, res) => {
  res.json({ msg: "To-Do List" });
});

//get todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

//get only one todo by id
app.get("/todos/:id", (req, res) => {
  let todo = todos.filter((todo) => todo.id === parseInt(req.params.id));
  res.json({ data: todo });
});

//add todo
app.post("/todos", (req, res) => {
  todos.push({ id: uuid.v4(), ...req.body });
  res.json({ data: todos });
});

//update todo
app.put("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ msg: "Todo not found" });
  }
  todo.title = req.body.title;
  todo.completed = req.body.completed;
  res.json(todo);
});

//delete todo
app.delete("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ msg: "Todo not found" });
  }
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  res.json({ msg: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
