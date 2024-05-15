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
  let todo = todos.find((todo) => todo.id === req.params.id);
  if (todo) {
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    res.json({ data: todos });
  } else {
    res.json({ msg: "Todo not found" });
  }
});

//delete todo
app.delete("/todos/:id", (req, res) => {
  let index = todos.findIndex((todo) => todo.id == req.params.id);
  todos.splice(index, 1);
  res.json({ data: todos });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
