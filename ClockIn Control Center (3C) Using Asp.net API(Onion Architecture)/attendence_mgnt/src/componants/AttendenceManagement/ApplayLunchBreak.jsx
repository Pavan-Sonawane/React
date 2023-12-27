// import React, { useState } from 'react';
// import { useAuth } from '../Login/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import {  Paper, Container } from '@mui/material';

// function ApplayLunchBreak() {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [clockInStatus, setClockInStatus] = useState('');
//   const userID = localStorage.getItem('userID');

//   const handleClockIn = async () => {
//     try {
//       if (!userID) {
//         setClockInStatus('User ID is missing. Please log in.');
//         return;
//       }

//       const clockInResponse = await axios.post(`https://localhost:44387/api/Attendance/lunchbreak/${userID}`, {});

//       const { status, message } = clockInResponse.data;

//       console.log('Clock-in response:', clockInResponse);

//       setClockInStatus(`${status}: ${message}`);

     
//     } catch (error) {
//       console.error('Clock-in error:', error);

//       if (error.response) {
//         console.log('Error response:', error.response.data);
//       }

//       setClockInStatus('Error during clock-in');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
        
//         {userID ? (
//           <>
//             <Button variant="contained" color="primary" onClick={handleClockIn} fullWidth>
//            Start Break
//             </Button>
//           </>
//         ) : (
//           <Typography color="error" paragraph>
//             Please log in to clock out.
//           </Typography>
//         )}
//       </Paper>
//     </Container>
//   );
// }

// export default ApplayLunchBreak;
import React, { useState } from 'react';
import { useAuth } from '../Login/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Container } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApplayLunchBreak() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [clockInStatus, setClockInStatus] = useState('');
  const userID = localStorage.getItem('userID');

  const handleStartBreak = async () => {
    try {
      if (!userID) {
        setClockInStatus('User ID is missing. Please log in.');
        return;
      }

      const startBreakResponse = await axios.post(`https://localhost:44387/api/Attendance/lunchbreak/${userID}`, {});

      const { status, message } = startBreakResponse.data;

      console.log('Start break response:', startBreakResponse);

      setClockInStatus(`${status}: ${message}`);

      // Show success notification when starting the break
      toast.success('You have successfully started your break!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Start break error:', error);

      if (error.response) {
        console.log('Error response:', error.response.data);
      }

      setClockInStatus('Error during starting the break');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
        {userID ? (
          <>
          <Typography variant="h5" gutterBottom>
          You want to Start Break...?
          </Typography>
            <Button variant="contained" color="primary" onClick={handleStartBreak} fullWidth>
              Yes....!
            </Button>
          </>
        ) : (
          <Typography color="error" paragraph>
            Please log in to start the break.
          </Typography>
        )}
      </Paper>
      <ToastContainer />
    </Container>
  );
}

export default ApplayLunchBreak;
