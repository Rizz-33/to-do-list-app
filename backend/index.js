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
    id: 1,
    title: "Learn Golang",
    completed: false,
  },
  {
    id: 1,
    title: "Learn   Django",
    completed: true,
  },
];

app.get("/", (req, res) => {
  res.json({ msg: "To-Do List" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
