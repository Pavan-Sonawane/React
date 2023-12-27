// import React, { useState, useEffect } from 'react';
// import { Button, Typography } from '@mui/material';
// import AddTaskComponent from './componants/AddTaskComponent';
// import MyTaskComponent from './componants/MyTaskComponent';
// import ImportantTaskComponent from './componants/ImportantTaskComponent';

// const App = () => {
//   const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [importantTasks, setImportantTasks] = useState([]);
//   const [showMyTasks, setShowMyTasks] = useState(false);
//   const [showImportantTasks, setShowImportantTasks] = useState(false);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const response = await fetch('http://localhost:3001/api/tasks');
//       const data = await response.json();
//       setTasks(data);
//     };

//     fetchTasks();
//   }, []);

//   const handleOpenAddTaskModal = () => {
//     setOpenAddTaskModal(true);
//   };

//   const handleCloseAddTaskModal = () => {
//     setOpenAddTaskModal(false);
//   };

//   const generateUniqueId = () => {
//     return Math.random().toString(36).substr(2, 9);
//   };

//   const handleAddTask = (newTask) => {
//     newTask.id = generateUniqueId();
//     setTasks([...tasks, newTask]);
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newTask)
//     };
//     fetch('http://localhost:3001/api/tasks', requestOptions)
//       .then(response => response.json())
//       .then(data => console.log(data));
//   };

//   const handleMarkAsImportant = (taskId) => {
//     const taskToMark = tasks.find(task => task.id === taskId);
//     if (taskToMark) {
//       setImportantTasks([...importantTasks, taskToMark]);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     }
//   };

//   const handleUpdateTask = (taskId, updatedTitle, updatedDescription, updatedDueDate) => {
//     setTasks(prevTasks =>
//       prevTasks.map(task =>
//         task.id === taskId
//           ? { ...task, title: updatedTitle, description: updatedDescription, dueDate: updatedDueDate }
//           : task
//       )
//     );

//     const updatedTask = { id: taskId, title: updatedTitle, description: updatedDescription, dueDate: updatedDueDate };
//     const requestOptions = {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedTask)
//     };
//     fetch(`http://localhost:3001/api/tasks/${taskId}`, requestOptions)
//       .then(response => response.json())
//       .then(data => console.log(data));
//   };

//   const handleDeleteTask = (taskId) => {
//     setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
//     setImportantTasks(prevImportantTasks => prevImportantTasks.filter(task => task.id !== taskId));

//     const requestOptions = {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//     };
//     fetch(`http://localhost:3001/api/tasks/${taskId}`, requestOptions)
//       .then(response => response.json())
//       .then(data => console.log(data));
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         Task Tracker
//       </Typography>
//       <Button variant="contained" onClick={handleOpenAddTaskModal}>
//         Add Task
//       </Button>
//       <Button variant="contained" onClick={() => setShowMyTasks(true)}>
//         My Tasks
//       </Button>
//       <Button variant="contained" onClick={() => setShowImportantTasks(true)}>
//          Prioritized Task({importantTasks.length})
//       </Button>

//       <AddTaskComponent open={openAddTaskModal} handleClose={handleCloseAddTaskModal} handleAddTask={handleAddTask} />
//       {showMyTasks && (
//         <MyTaskComponent
//           tasks={tasks}
//           handleMarkAsImportant={handleMarkAsImportant}
//           handleEditTask={handleUpdateTask}
//           handleDeleteTask={handleDeleteTask}
//         />
//       )}
//       {showImportantTasks && <ImportantTaskComponent importantTasks={importantTasks} handleEditTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} />}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import AddTaskComponent from './componants/AddTaskComponent';
import MyTaskComponent from './componants/MyTaskComponent';
import ImportantTaskComponent from './componants/ImportantTaskComponent';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import StarIcon from '@mui/icons-material/Star';
const App = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [importantTasks, setImportantTasks] = useState([]);
  const [showMyTasks, setShowMyTasks] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:3001/api/tasks');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleOpenAddTaskModal = () => {
    setOpenAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setOpenAddTaskModal(false);
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleAddTask = (newTask) => {
    newTask.id = generateUniqueId();
    setTasks([...tasks, newTask]);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    };
    fetch('http://localhost:3001/api/tasks', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleMarkAsImportant = (taskId) => {
    const taskToMark = tasks.find(task => task.id === taskId);
    if (taskToMark) {
      setImportantTasks([...importantTasks, taskToMark]);
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const handleUpdateTask = (taskId, updatedTitle, updatedDescription, updatedDueDate) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, title: updatedTitle, description: updatedDescription, dueDate: updatedDueDate }
          : task
      )
    );

    const updatedTask = { id: taskId, title: updatedTitle, description: updatedDescription, dueDate: updatedDueDate };
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask)
    };
    fetch(`http://localhost:3001/api/tasks/${taskId}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setImportantTasks(prevImportantTasks => prevImportantTasks.filter(task => task.id !== taskId));

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:3001/api/tasks/${taskId}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Task Tracker
      </Typography>
      <Button 
        variant="contained" 
        startIcon={<AddIcon />} 
        onClick={handleOpenAddTaskModal}
        style={{ backgroundColor: '#4caf50', marginRight: '10px' }} // Green color for "Add Task"
      >
        Add Task
      </Button>
      <Button 
        variant="contained" 
        startIcon={<ListIcon />} 
        onClick={() => setShowMyTasks(true)}
        style={{ backgroundColor: '#2196f3', marginRight: '10px' }} // Blue color for "My Tasks"
      >
        My Tasks
      </Button>
      <Button 
        variant="contained" 
        startIcon={<StarIcon />} 
        onClick={() => setShowMyTasks(false)}
        style={{ backgroundColor: '#ff5722' }} // Orange color for "Prioritized Task"
      >
        Prioritized Task({importantTasks.length})
      </Button>
      <AddTaskComponent open={openAddTaskModal} handleClose={handleCloseAddTaskModal} handleAddTask={handleAddTask} />
      {showMyTasks ? (
        <MyTaskComponent
          tasks={tasks}
          handleMarkAsImportant={handleMarkAsImportant}
          handleEditTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
      ) : (
        <ImportantTaskComponent importantTasks={importantTasks} handleEditTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} />
      )}
    </div>
  );
};

export default App;
