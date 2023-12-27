import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ImportantTaskComponent = ({ importantTasks, handleDeleteTask }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Important Tasks</h2>
      {importantTasks.map((task) => (
        <Card key={task.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body1">Description: {task.description}</Typography>
            <Typography variant="body1">Due Date: {task.dueDate}</Typography>
            <Button variant="outlined" onClick={() => handleDeleteTask(task.id)}>Delete</Button> 
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImportantTaskComponent;
