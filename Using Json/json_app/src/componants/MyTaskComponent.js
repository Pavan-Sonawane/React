import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, TextField } from '@mui/material';

const MyTaskComponent = ({ tasks, handleMarkAsImportant, handleEditTask, handleDeleteTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedDueDate, setUpdatedDueDate] = useState('');

  const handleOpenEditModal = (task) => {
    setSelectedTask(task);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
    setUpdatedDueDate(task.dueDate);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedTask(null);
    setUpdatedTitle('');
    setUpdatedDescription('');
    setUpdatedDueDate('');
    setEditModalOpen(false);
  };

  const handleUpdate = () => {
    handleEditTask(selectedTask.id, updatedTitle, updatedDescription, updatedDueDate);
    handleCloseEditModal();
  };

  const handleDelete = (taskId) => {
    handleDeleteTask(taskId);
    handleCloseEditModal();
  };
//styling
const buttonStyle = {
  height: '36px', 
  width: '120px', 
  marginRight: '5px', 
};

const markImportantButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#FFD700', 
};

const updateButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#007BFF', 
};

const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#DC3545', 
};
  if (!tasks) return null;
  return (
    <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
    <h2>My Tasks</h2>
    {tasks.map((task) => (
      <Card key={task.id} style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body1">Description: {task.description}</Typography>
          <Typography variant="body1">Due Date: {task.dueDate}</Typography>
          <Button
            variant="contained"
            style={markImportantButtonStyle}
            onClick={() => handleMarkAsImportant(task.id)}
          >
            Prioritize
          </Button>
          <Button
            variant="contained"
            style={updateButtonStyle}
            onClick={() => handleOpenEditModal(task)}
          >
            Update
          </Button>
          <Button
            variant="contained"
            style={deleteButtonStyle}
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    ))}
    <Modal open={editModalOpen} onClose={handleCloseEditModal}>
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: '#fff', 
    padding: '20px', 
    boxShadow: 24, 
    borderRadius: '8px',
    textAlign: 'center'
  }}>
    <h2>Edit Task</h2>
    <TextField label="Task Name" fullWidth value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
    <TextField label="Description" fullWidth value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
    <TextField type="date" fullWidth value={updatedDueDate} onChange={(e) => setUpdatedDueDate(e.target.value)} />
    <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleUpdate}>
      Save Changes
    </Button>
  </div>
</Modal>
    </div>
  );
};

export default MyTaskComponent;
