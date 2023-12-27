import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,TextField } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ImportantTaskComponent = ({ importantTasks, handleEditTask, handleDeleteTask }) => {
  const [editedTask, setEditedTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDueDate, setEditedDueDate] = useState('');

 

  const handleCloseEditModal = () => {
    setEditedTask(null);
  };

  const handleSaveChanges = () => {
    handleEditTask(editedTask.id, editedTitle, editedDescription, editedDueDate);
    handleCloseEditModal();
  };

  const handleDelete = (taskId) => {
    handleDeleteTask(taskId);
  };

  return (
    <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', color:"ActiveBorder"}}>
    <Typography variant="h4" gutterBottom>
        <StarIcon style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Prioritized Tasks
      </Typography>
    {importantTasks.map((task) => (
      <Card key={task.id} style={{ background: '#f0f0f0', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <CardContent>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body1">Description: {task.description}</Typography>
          <Typography variant="body1">Due Date: {task.dueDate}</Typography>
          <Button variant="outlined" color="secondary" onClick={() => handleDelete(task.id)}>Delete</Button> 
        </CardContent>
      </Card>
    ))}

      {editedTask && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px' }}>
          <h2>Edit Task</h2>
          <TextField
            label="Title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Due Date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>Save Changes</Button>
          <Button variant="outlined" onClick={handleCloseEditModal}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default ImportantTaskComponent;
