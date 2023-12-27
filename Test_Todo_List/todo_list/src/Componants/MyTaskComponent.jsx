// // import React, { useState } from 'react';
// // import { Card, CardContent, Typography, Button, Modal, TextField } from '@mui/material';

// // const MyTaskComponent = ({ tasks, handleMarkAsImportant, handleEditTask, handleDeleteTask }) => {
// //   const [selectedTask, setSelectedTask] = useState(null);
// //   const [editModalOpen, setEditModalOpen] = useState(false);
// //   const [updatedTitle, setUpdatedTitle] = useState('');
// //   const [updatedDescription, setUpdatedDescription] = useState('');
// //   const [updatedDueDate, setUpdatedDueDate] = useState('');

// //   const handleOpenEditModal = (task) => {
// //     setSelectedTask(task);
// //     setUpdatedTitle(task.title);
// //     setUpdatedDescription(task.description);
// //     setUpdatedDueDate(task.dueDate);
// //     setEditModalOpen(true);
// //   };

// //   const handleCloseEditModal = () => {
// //     setSelectedTask(null);
// //     setUpdatedTitle('');
// //     setUpdatedDescription('');
// //     setUpdatedDueDate('');
// //     setEditModalOpen(false);
// //   };

// //   const handleUpdate = () => {
// //     handleEditTask(selectedTask.id, updatedTitle, updatedDescription, updatedDueDate);
// //     handleCloseEditModal();
// //   };

// //   const handleDelete = (taskId) => {
// //     handleDeleteTask(taskId);
// //     handleCloseEditModal();
// //   };

// //   if (!tasks) return null;
// //   return (
// //     <div style={{ marginTop: '20px' }}>
// //       <h2>My Tasks</h2>
// //       {tasks.map((task) => (
// //         <Card key={task.id} style={{ marginBottom: '10px' }}>
// //           <CardContent>
// //             <Typography variant="h6">{task.title}</Typography>
// //             <Typography variant="body1">Description: {task.description}</Typography>
// //             <Typography variant="body1">Due Date: {task.dueDate}</Typography>
// //             <Button variant="contained" color="primary" onClick={() => handleMarkAsImportant(task.id)}>
// //               Mark as Important
// //             </Button>
// //             <Button variant="contained" color="primary" onClick={() => handleOpenEditModal(task)}>
// //               Update
// //             </Button>
// //             <Button variant="contained" color="secondary" onClick={() => handleDelete(task.id)}>
// //               Delete
// //             </Button>
// //           </CardContent>
// //         </Card>
// //       ))}
// //       <Modal open={editModalOpen} onClose={handleCloseEditModal}>
// //         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
// //           <h2>Edit Task</h2>
// //           <TextField label="Task Name" fullWidth value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
// //           <TextField label="Description" fullWidth value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
// //           <TextField type="date" fullWidth value={updatedDueDate} onChange={(e) => setUpdatedDueDate(e.target.value)} />
// //           <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleUpdate}>
// //             Save Changes
// //           </Button>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default MyTaskComponent;
// import React from 'react';
// import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const MyTaskComponent = ({ tasks, handleEditTask, handleDeleteTask }) => {
//   return (
//     <List>
//       {tasks.map(task => (
//         <ListItem key={task.id}>
//           <ListItemText
//             primary={task.title}
//             secondary={task.description}
//           />
//           <ListItemSecondaryAction>
//             <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(task.id)}>
//               <EditIcon />
//             </IconButton>
//             <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
//               <DeleteIcon />
//             </IconButton>
//           </ListItemSecondaryAction>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default MyTaskComponent;
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const MyTaskComponent = ({ tasks, handleEditTask, handleDeleteTask }) => {
  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <ListItemText
            primary={task.title}
            secondary={task.description}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(task.id)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default MyTaskComponent;
