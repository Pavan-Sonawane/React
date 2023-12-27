import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import AddTaskComponent from './components/AddTaskComponent';
import MyTaskComponent from './components/MyTaskComponent';
import ImportantTaskComponent from './components/ImportantTaskComponent';

const App = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [importantTasks, setImportantTasks] = useState([]);

  const handleOpenAddTaskModal = () => {
    setOpenAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setOpenAddTaskModal(false);
  };

  useEffect(() => {
    // Fetch tasks and important tasks from the API
    fetch('http://localhost:3001/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));

    fetch('http://localhost:3001/api/importantTasks')
      .then(response => response.json())
      .then(data => setImportantTasks(data));
  }, []);

  const handleAddTask = (newTask) => {
    fetch('http://localhost:3001/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(response => response.json())
    .then(data => {
      setTasks([...tasks, data]);
    });
  };

  const handleMarkAsImportant = (taskId) => {
    const taskToMark = tasks.find(task => task.id === taskId);
    if (taskToMark) {
      fetch(`http://localhost:3001/api/tasks/${taskId}`, {
        method: 'DELETE'
      })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      });

      fetch('http://localhost:3001/api/importantTasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskToMark)
      })
      .then(response => response.json())
      .then(data => {
        setImportantTasks([...importantTasks, data]);
      });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>
      <Button variant="contained" onClick={handleOpenAddTaskModal}>
        Add Task
      </Button>
      <Button variant="contained" onClick={() => {}}>
        My Tasks
      </Button>
      <Button variant="contained" onClick={() => {}}>
        Important Tasks
      </Button>

      <AddTaskComponent open={openAddTaskModal} handleClose={handleCloseAddTaskModal} handleAddTask={handleAddTask} />
      <MyTaskComponent tasks={tasks} handleMarkAsImportant={handleMarkAsImportant} />
      <ImportantTaskComponent importantTasks={importantTasks} />
    </div>
  );
};

export default App;
