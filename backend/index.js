const express = require("express");
const app = express();
const uuid = require("uuid");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 3000;

const connectionString =
  "mongodb+srv://aarruwanthie:12$45$78@cluster0.ffhhoj8.mongodb.net/TodoList?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("Connected to DB"))
//   .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

const todos = [
  { id: 1, title: "Learn Express", completed: true },
  { id: 2, title: "Learn Golang", completed: false },
  { id: 3, title: "Learn Django", completed: true },
];

app.get("/", (req, res) => {
  res.json({ msg: "To-Do List" });
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  let todo = todos.filter((todo) => todo.id === parseInt(req.params.id));
  res.json({ data: todo });
});

app.post("/todos", (req, res) => {
  todos.push({ id: uuid.v4(), ...req.body });
  res.json({ data: todos });
});

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

app.delete("/todos/:id", (req, res) => {
  let index = todos.findIndex((todo) => todo.id == req.params.id);
  todos.splice(index, 1);
  res.json({ data: todos });
});

function connectDB(url) {
  return mongoose.connect(url);
}
async function start() {
  try {
    await connectDB(connectionString);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
