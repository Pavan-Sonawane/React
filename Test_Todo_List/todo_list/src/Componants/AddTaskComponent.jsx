// import React, { useState } from 'react';
// import { Modal, Button, TextField } from '@mui/material';

// const AddTaskComponent = ({ open, handleClose, handleAddTask }) => {
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');

//   const handleAdd = () => {
//     const newTask = {
//       id: Date.now(),
//       title: taskName,
//       description: taskDescription,
//       dueDate: dueDate
//     };
//     handleAddTask(newTask);
//     handleClose();
    
//     setTaskName('');
//     setTaskDescription('');
//     setDueDate('');
//   };

//   return (
//     <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div style={{ backgroundColor: '#fff', boxShadow: 24, p: 4, outline: 'none', borderRadius: '8px', minWidth: '300px', margin: 'auto', padding: '16px' }}>
//         <h2>Add Task</h2>
//         <TextField label="Task Name" fullWidth value={taskName} onChange={(e) => setTaskName(e.target.value)} />
//         <TextField label="Description" fullWidth value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
//         <TextField  type="date" fullWidth value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
//         <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleAdd}>
//           Add Task
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default AddTaskComponent;
import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

const AddTaskComponent = ({ open, handleClose, handleAddTask }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(newTask);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            value={newTask.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            name="description"
            value={newTask.description}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Due Date"
            variant="outlined"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleChange}
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
            Add Task
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddTaskComponent;
