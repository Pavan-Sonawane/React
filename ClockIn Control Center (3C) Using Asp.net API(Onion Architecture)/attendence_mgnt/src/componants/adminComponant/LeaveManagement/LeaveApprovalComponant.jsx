// // // LeaveApprovalComponent.jsx
// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchLeaves, updateLeave } from '../../../actions/LeaveRequestAction';

// // const LeaveApprovalComponent = () => {
// //   const dispatch = useDispatch();
// //   const leaves = useSelector((state) => state.leave.leaves);

// //   useEffect(() => {
// //     dispatch(fetchLeaves());
// //   }, [dispatch]);

// //   const [selectedLeave, setSelectedLeave] = useState(null);

// //   const [updateLeaveData, setUpdateLeaveData] = useState({
// //     leaveID: 0,
// //     userID: '',
// //     leaveType: '',
// //     description: '',
// //     startDate: '',
// //     endDate: '',
// //     status: 'Pending',
// //   });

// //   const handleInputChange = (e, formDataSetter) => {
// //     const { name, value } = e.target;
// //     formDataSetter((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleUpdateLeave = () => {
// //     dispatch(updateLeave(selectedLeave.leaveID, updateLeaveData));

// //     setUpdateLeaveData({
// //       leaveID: 0,
// //       userID: '',
// //       leaveType: '',
// //       description: '',
// //       startDate: '',
// //       endDate: '',
// //       status: '',
// //     });
// //     setSelectedLeave(null);
// //   };

// //   const handleUpdateClick = (leave) => {
// //     setSelectedLeave(leave);
// //     setUpdateLeaveData({
// //       leaveID: leave.leaveID,
// //       userID: leave.userID,
// //       leaveType: leave.leaveType,
// //       description: leave.description,
// //       startDate: leave.startDate,
// //       endDate: leave.endDate,
// //       status: leave.status,
// //     });
// //   };

// //   const handleCancelUpdate = () => {
// //     setSelectedLeave(null);
// //     setUpdateLeaveData({
// //       leaveID: 0,
// //       userID: '',
// //       leaveType: '',
// //       description: '',
// //       startDate: '',
// //       endDate: '',
// //       status: '',
// //     });
// //   };

// //   return (
// //     <div>
// //       <h2>Leave Approval</h2>
// //       {leaves.length > 0 ? (
// //         <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black' }}>
// //           <thead>
// //             <tr>
// //               <th style={{ border: '1px solid black' }}>Leave ID</th>
// //               <th style={{ border: '1px solid black' }}>Leave Type</th>
// //               <th style={{ border: '1px solid black' }}>Description</th>
// //               <th style={{ border: '1px solid black' }}>Start Date</th>
// //               <th style={{ border: '1px solid black' }}>End Date</th>
// //               <th style={{ border: '1px solid black' }}>Status</th>
// //               <th style={{ border: '1px solid black' }}>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {leaves.map((leave) => (
// //               <tr key={leave.leaveID} style={{ border: '1px solid black' }}>
// //                 <td>{leave.leaveID}</td>
// //                 <td>{leave.leaveType}</td>
// //                 <td>{leave.description}</td>
// //                 <td>{new Date(leave.startDate).toLocaleString()}</td>
// //                 <td>{new Date(leave.endDate).toLocaleString()}</td>
// //                 <td>{leave.status}</td>
// //                 <td style={{ textAlign: 'center' }}>
// //                   <button type="button" onClick={() => handleUpdateClick(leave)}>
// //                     Update
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       ) : (
// //         <p>No leave requests available.</p>
// //       )}

// //       {selectedLeave && (
// //         <div>
// //           <h2>Update Leave Request</h2>
// //           <form>
// //             <div>
// //               <label htmlFor="status">Status:</label>
// //               <select
// //                 id="status"
// //                 name="status"
// //                 value={updateLeaveData.status}
// //                 onChange={(e) => handleInputChange(e, setUpdateLeaveData)}
// //               >
// //                 <option value="Approved">Approved</option>
// //                 <option value="Pending">Pending</option>
// //                 <option value="Rejected">Rejected</option>
// //               </select>
// //             </div>

// //             <button type="button" onClick={handleUpdateLeave}>
// //               Update Leave
// //             </button>
// //             <button type="button" onClick={handleCancelUpdate}>
// //               Cancel Update
// //             </button>
// //           </form>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LeaveApprovalComponent;
// // Import React, Material-UI components, and icons
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
// } from '@mui/material';
// import { Edit as EditIcon, Cancel as CancelIcon, Save as SaveIcon } from '@mui/icons-material';
// import { fetchLeaves, updateLeave } from '../../../actions/LeaveRequestAction';

// const LeaveApprovalComponent = () => {
//   const dispatch = useDispatch();
//   const leaves = useSelector((state) => state.leave.leaves);

//   useEffect(() => {
//     dispatch(fetchLeaves());
//   }, [dispatch]);

//   const [selectedLeave, setSelectedLeave] = useState(null);
//   const [updateLeaveData, setUpdateLeaveData] = useState({
//     leaveID: 0,
//     userID: '',
//     leaveType: '',
//     description: '',
//     startDate: '',
//     endDate: '',
//     status: 'Pending',
//   });

//   const [open, setOpen] = useState(false);

//   const handleOpenDialog = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   const handleInputChange = (e, formDataSetter) => {
//     const { name, value } = e.target;
//     formDataSetter((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdateLeave = () => {
//     dispatch(updateLeave(selectedLeave.leaveID, updateLeaveData));

//     setUpdateLeaveData({
//       leaveID: 0,
//       userID: '',
//       leaveType: '',
//       description: '',
//       startDate: '',
//       endDate: '',
//       status: '',
//     });
//     setSelectedLeave(null);
//     handleCloseDialog();
//   };

//   const handleUpdateClick = (leave) => {
//     setSelectedLeave(leave);
//     setUpdateLeaveData({
//       leaveID: leave.leaveID,
//       userID: leave.userID,
//       leaveType: leave.leaveType,
//       description: leave.description,
//       startDate: leave.startDate,
//       endDate: leave.endDate,
//       status: leave.status,
//     });

//     handleOpenDialog();
//   };

//   const handleCancelUpdate = () => {
//     setSelectedLeave(null);
//     setUpdateLeaveData({
//       leaveID: 0,
//       userID: '',
//       leaveType: '',
//       description: '',
//       startDate: '',
//       endDate: '',
//       status: '',
//     });
//     handleCloseDialog();
//   };

//   return (
//     <div>
//       <Typography variant="h2" gutterBottom>
//         Leave Approval
//       </Typography>
//       {leaves.length > 0 ? (
//         <TableContainer
//           component={Paper}
//           style={{
//             marginBottom: '16px',
//             maxWidth: '90%', // Adjust the maximum width of the table
//             margin: 'auto', // Center the table
//           }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '50px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   Leave ID
//                 </TableCell>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '100px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   Leave Type
//                 </TableCell>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '150px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   Description
//                 </TableCell>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '100px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   Start Date
//                 </TableCell>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '100px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   End Date
//                 </TableCell>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '80px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   Status
//                 </TableCell>
//                 <TableCell
//                   style={{
//                     backgroundColor: '#1976D2',
//                     color: '#FFF',
//                     fontWeight: 'bold',
//                     minWidth: '80px', // Adjust the minimum width of each cell
//                   }}
//                 >
//                   Actions
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {leaves.map((leave) => (
//                 <TableRow
//                   key={leave.leaveID}
//                   style={{
//                     '&:hover': { backgroundColor: '#E3F2FD', cursor: 'pointer' },
//                   }}
//                 >
//                   <TableCell>{leave.leaveID}</TableCell>
//                   <TableCell>{leave.leaveType}</TableCell>
//                   <TableCell>{leave.description}</TableCell>
//                   <TableCell>{new Date(leave.startDate).toLocaleString()}</TableCell>
//                   <TableCell>{new Date(leave.endDate).toLocaleString()}</TableCell>
//                   <TableCell>{leave.status}</TableCell>
//                   <TableCell>
//                     <Button
//                       startIcon={<EditIcon />}
//                       variant="outlined"
//                       onClick={() => handleUpdateClick(leave)}
//                     >
//                       Update
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <Typography variant="body1" color="textSecondary">
//           No leave requests available.
//         </Typography>
//       )}

//       {selectedLeave && (
//         <Dialog open={open} onClose={handleCloseDialog}>
//           <DialogTitle>Update Leave Request</DialogTitle>
//           <DialogContent>
//             <form>
//               <FormControl fullWidth>
//                 <InputLabel id="status-label">Status</InputLabel>
//                 <Select
//                   labelId="status-label"
//                   id="status"
//                   name="status"
//                   value={updateLeaveData.status}
//                   onChange={(e) => handleInputChange(e, setUpdateLeaveData)}
//                 >
//                   <MenuItem value="Approved">Approved</MenuItem>
//                   <MenuItem value="Pending">Pending</MenuItem>
//                   <MenuItem value="Rejected">Rejected</MenuItem>
//                 </Select>
//               </FormControl>
//             </form>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               startIcon={<SaveIcon />}
//               variant="contained"
//               color="primary"
//               onClick={handleUpdateLeave}
//             >
//               Update Leave
//             </Button>
//             <Button
//               startIcon={<CancelIcon />}
//               variant="outlined"
//               color="secondary"
//               onClick={handleCancelUpdate}
//             >
//               Cancel Update
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default LeaveApprovalComponent;
// LeaveApprovalComponent.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { Edit as EditIcon, Cancel as CancelIcon, Save as SaveIcon } from '@mui/icons-material';
import { fetchLeaves, updateLeave } from '../../../actions/LeaveRequestAction';

const LeaveApprovalComponent = () => {
  const dispatch = useDispatch();
  const leaves = useSelector((state) => state.leave.leaves);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  const [selectedLeave, setSelectedLeave] = useState(null);
  const [updateLeaveData, setUpdateLeaveData] = useState({
    leaveID: 0,
    userID: '',
    leaveType: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Pending',
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleInputChange = (e, formDataSetter) => {
    const { name, value } = e.target;
    formDataSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateLeave = () => {
    dispatch(updateLeave(selectedLeave.leaveID, updateLeaveData));

    setUpdateLeaveData({
      leaveID: 0,
      userID: '',
      leaveType: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
    });
    setSelectedLeave(null);
    handleCloseDialog();
  };

  const handleUpdateClick = (leave) => {
    setSelectedLeave(leave);
    setUpdateLeaveData({
      leaveID: leave.leaveID,
      userID: leave.userID,
      leaveType: leave.leaveType,
      description: leave.description,
      startDate: leave.startDate,
      endDate: leave.endDate,
      status: leave.status,
    });

    handleOpenDialog();
  };

  const handleCancelUpdate = () => {
    setSelectedLeave(null);
    setUpdateLeaveData({
      leaveID: 0,
      userID: '',
      leaveType: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
    });
    handleCloseDialog();
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Leave Approval
      </Typography>
      {leaves.length > 0 ? (
        <TableContainer
          component={Paper}
          style={{
            marginBottom: '16px',
            maxWidth: '90%', // Adjust the maximum width of the table
            margin: 'auto', // Center the table
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                
                <TableCell
                  style={{
                    backgroundColor: '#1976D2',
                    color: '#FFF',
                    fontWeight: 'bold',
                    minWidth: '100px', // Adjust the minimum width of each cell
                  }}
                >
                  Leave Type
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: '#1976D2',
                    color: '#FFF',
                    fontWeight: 'bold',
                    minWidth: '150px', // Adjust the minimum width of each cell
                  }}
                >
                  Description
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: '#1976D2',
                    color: '#FFF',
                    fontWeight: 'bold',
                    minWidth: '100px', // Adjust the minimum width of each cell
                  }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: '#1976D2',
                    color: '#FFF',
                    fontWeight: 'bold',
                    minWidth: '100px', // Adjust the minimum width of each cell
                  }}
                >
                  End Date
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: '#1976D2',
                    color: '#FFF',
                    fontWeight: 'bold',
                    minWidth: '80px', // Adjust the minimum width of each cell
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: '#1976D2',
                    color: '#FFF',
                    fontWeight: 'bold',
                    minWidth: '80px', // Adjust the minimum width of each cell
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaves.map((leave) => (
                <TableRow
                  key={leave.leaveID}
                  style={{
                    '&:hover': { backgroundColor: '#E3F2FD', cursor: 'pointer' },
                  }}
                >
                  
                  <TableCell>{leave.leaveType}</TableCell>
                  <TableCell>{leave.description}</TableCell>
                  <TableCell>{new Date(leave.startDate).toLocaleString()}</TableCell>
                  <TableCell>{new Date(leave.endDate).toLocaleString()}</TableCell>
                  <TableCell>{leave.status}</TableCell>
                  <TableCell>
                    <Button
                      startIcon={<EditIcon />}
                      variant="outlined"
                      onClick={() => handleUpdateClick(leave)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No leave requests available.
        </Typography>
      )}

      {selectedLeave && (
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle>Update Leave Request</DialogTitle>
          <DialogContent>
            <form>
              <FormControl fullWidth>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  value={updateLeaveData.status}
                  onChange={(e) => handleInputChange(e, setUpdateLeaveData)}
                >
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="primary"
              onClick={handleUpdateLeave}
            >
              Update Leave
            </Button>
            <Button
              startIcon={<CancelIcon />}
              variant="outlined"
              color="secondary"
              onClick={handleCancelUpdate}
            >
              Cancel Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default LeaveApprovalComponent;
