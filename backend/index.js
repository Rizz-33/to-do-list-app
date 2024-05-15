const express = require("express");
const app = express();

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
app.get("/todo/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ msg: "Todo not found" });
  }
  res.json(todo);
});

//add todo
app.post("/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(todo);
  res.json(todo);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
