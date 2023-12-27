// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchStudentsAsync } from '../features/Student/studentSlice';

// const StudentComponent = () => {
//   const dispatch = useDispatch();
//   const students = useSelector(state => state.student.students);

//   useEffect(() => {
//     dispatch(fetchStudentsAsync());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Student List</h2>
//       <ul>
//         {students.map(student => (
//           <li key={student.id}>
//             <strong>ID:</strong> {student.studentId}<br />
//             <strong>Name:</strong> {student.firstName} {student.lastName}<br />
//             <strong>Date of Birth:</strong> {new Date(student.dateOfBirth).toLocaleDateString()}<br />
//             <strong>Address:</strong> {student.address}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentComponent;
 // StudentComponent.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsAsync, deleteStudentAsync } from '../features/Student/studentSlice'; // Import deleteStudentAsync action creator
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';


const StudentComponent = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.student.students);

  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  const handleDelete = (studentId) => {
    dispatch(deleteStudentAsync(studentId));
  };

  return (
    <div>
    <center>
      <Table style={{ border: '1px solid black' }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
             
              <TableCell>{student.firstName}</TableCell>
              <TableCell>{student.lastName}</TableCell>
              <TableCell>{new Date(student.dateOfBirth).toLocaleDateString()}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>
                <Button variant='contained' onClick={() => handleDelete(student.studentId)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </center>
  </div>
  );
};

export default StudentComponent;
