// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const ImportantTaskComponent = ({ importantTasks }) => {
//   return (
//     <div style={{ marginTop: '20px' }}>
//       <h2>Important Tasks</h2>
//       {importantTasks.map((task) => (
//         <Card key={task.id} style={{ marginBottom: '10px' }}>
//           <CardContent>
//             <Typography variant="h6">{task.title}</Typography>
//             <Typography variant="body1">Description: {task.description}</Typography>
//             <Typography variant="body1">Due Date: {task.dueDate}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default ImportantTaskComponent;
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const ImportantTaskComponent = ({ importantTasks, handleEditTask, handleDeleteTask }) => {
  const [editedTask, setEditedTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDueDate, setEditedDueDate] = useState('');

  const handleOpenEditModal = (task) => {
    setEditedTask(task);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedDueDate(task.dueDate);
  };

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
    <div style={{ marginTop: '20px' }}>
      <h2>Important Tasks</h2>
      {importantTasks.map((task) => (
        <Card key={task.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body1">Description: {task.description}</Typography>
            <Typography variant="body1">Due Date: {task.dueDate}</Typography>
            {/* <Button variant="outlined" onClick={() => handleOpenEditModal(task)}>Edit</Button>*/}
            <Button variant="outlined" onClick={() => handleDelete(task.id)}>Delete</Button> 
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
