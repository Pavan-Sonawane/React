import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

const AddTaskComponent = ({ open, handleClose, handleAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      title: taskName,
      description: taskDescription,
      dueDate: dueDate
    };
    handleAddTask(newTask);
    handleClose();
    
    setTaskName('');
    setTaskDescription('');
    setDueDate('');
  };

  return (
    <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#fff', boxShadow: 24, p: 4, outline: 'none', borderRadius: '8px', minWidth: '300px', margin: 'auto', padding: '16px' }}>
        <h2>Add Task</h2>
        <TextField label="Task Name" fullWidth value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <TextField label="Description" fullWidth value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        <TextField  type="date" fullWidth value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleAdd}>
          Add Task
        </Button>
      </div>
    </Modal>
  );
};

export default AddTaskComponent;
