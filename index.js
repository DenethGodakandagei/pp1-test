
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build REST API", completed: true }
];

// Home route
app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// Get task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});
sdsdffsdfsdf
sdfsdf

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build REST API", completed: true }
];

// Home route
app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// Get task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
