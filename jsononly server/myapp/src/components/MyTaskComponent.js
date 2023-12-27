import React from 'react';
import { Card, CardContent, Typography, Button, Modal, TextField } from '@mui/material';

const MyTaskComponent = ({ tasks, handleMarkAsImportant, handleDeleteTask }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Tasks</h2>
      {tasks.map((task) => (
        <Card key={task.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body1">Description: {task.description}</Typography>
            <Typography variant="body1">Due Date: {task.dueDate}</Typography>
            <Button variant="contained" color="primary" onClick={() => handleMarkAsImportant(task.id)}>
              Mark as Important
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyTaskComponent;
