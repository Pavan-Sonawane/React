// import React, { useState } from 'react';
// import { useAuth } from '../Login/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Button, Typography, Paper, Container } from '@mui/material';

// function ClockOut() {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [clockOutStatus, setClockOutStatus] = useState('');
//   const userID = localStorage.getItem('userID');

//   const handleClockOut = async () => {
//     try {
//       if (!userID) {
//         // Handle case where userID is missing
//         setClockOutStatus('User ID is missing. Please log in.');
//         return;
//       }

//       // Assuming you have an API endpoint for clock-out
//       const clockOutResponse = await axios.post(`https://localhost:44387/api/Attendance/clockout/${userID}`, {
//         // Other clock-out data you might need
//       });

//       // Assuming the API response has a 'status' and 'message' property
//       const { status, message } = clockOutResponse.data;

//       // Log the entire response for debugging purposes
//       console.log('Clock-out response:', clockOutResponse);

//       setClockOutStatus(`${status}: ${message}`);
//     } catch (error) {
//       console.error('Clock-out error:', error);

//       // Log the entire error response for debugging purposes
//       if (error.response) {
//         console.log('Error response:', error.response.data);
//       }

//       setClockOutStatus('Error during clock-out');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
//         <Typography variant="h5" gutterBottom>
//           Clock Out
//         </Typography>
//         {userID ? (
//           <>
//             <Button variant="contained" color="primary" onClick={handleClockOut} fullWidth>
//               Clock Out
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

// export default ClockOut;
import React, { useState } from 'react';
import { useAuth } from '../Login/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Paper, Container } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClockOut() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [clockOutStatus, setClockOutStatus] = useState('');
  const userID = localStorage.getItem('userID');

  const handleClockOut = async () => {
    try {
      if (!userID) {
        setClockOutStatus('User ID is missing. Please log in.');
        return;
      }

      const clockOutResponse = await axios.post(`https://localhost:44387/api/Attendance/clockout/${userID}`, {});

      const { status, message } = clockOutResponse.data;

      console.log('Clock-out response:', clockOutResponse);

      setClockOutStatus(`${status}: ${message}`);

      // Show success notification when clocked out
      toast.success('You have successfully clocked out!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Clock-out error:', error);

      if (error.response) {
        console.log('Error response:', error.response.data);
      }

      setClockOutStatus('Error during clock-out');

      // Show error notification when clock-out fails
      toast.error('Error during clock-out. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
     
        {userID ? (
          <>
          <Typography variant="h5" gutterBottom>
          You want to clock Out?
          </Typography>
            <Button variant="contained" color="primary" onClick={handleClockOut} fullWidth>
             Yes
            </Button>
          </>
        ) : (
          <Typography color="error" paragraph>
            Please log in to clock out.
          </Typography>
        )}
      </Paper>
      <ToastContainer />
    </Container>
  );
}

export default ClockOut;
