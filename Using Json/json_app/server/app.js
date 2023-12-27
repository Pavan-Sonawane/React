const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const tasksFilePath = path.join(__dirname, 'data', 'tasks.json');

const readTasksFromJSON = () => {
  const tasksData = fs.readFileSync(tasksFilePath);
  return JSON.parse(tasksData);
};

const writeTasksToJSON = (tasks) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

app.get('/api/tasks', (req, res) => {
  const tasks = readTasksFromJSON();
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const tasks = readTasksFromJSON();
  const newTask = req.body;
  tasks.push(newTask);
  writeTasksToJSON(tasks);
  res.json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const tasks = readTasksFromJSON();
  const taskId = req.params.id;
  const updatedTask = req.body;

  const updatedTasks = tasks.map(task => (task.id === taskId ? updatedTask : task));

  writeTasksToJSON(updatedTasks);

  res.json(updatedTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  const tasks = readTasksFromJSON();
  const taskId = req.params.id;

  const updatedTasks = tasks.filter(task => task.id !== taskId);

  writeTasksToJSON(updatedTasks);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
