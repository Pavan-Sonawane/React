// // // Assuming you have a component file, e.g., EmployeeList.js
// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchEmployees } from '../../action/employeeAction'; // Update with the correct path
// // import AddEmployee from './AddEmployee';

// // const EmployeeList = () => {
// //   const dispatch = useDispatch();
// //   const employees = useSelector((state) => state.employees.employees); // Assuming you have a root state named 'employees'

// //   useEffect(() => {
// //     dispatch(fetchEmployees());
// //   }, [dispatch]);

// //   return (
// //     <div>
// //         <AddEmployee/>
// //       <h2>Employee List</h2>
// //       <ul>
// //         {employees.map((employee) => (
// //           <li key={employee.id}>
// //             <strong>Name:</strong> {employee.name}<br />
// //             <strong>Email:</strong> {employee.email}<br />
// //             <strong>Phone:</strong> {employee.phone}<br />
// //             <strong>Gender:</strong> {employee.gender}<br />
// //             <strong>DOB:</strong> {employee.dob}<br />
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default EmployeeList;
// // Assuming you have a component file, e.g., EmployeeList.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEmployees, deleteEmployee } from '../../action/employeeAction'; // Update with the correct path
// import AddEmployee from './AddEmployee';

// const EmployeeList = () => {
//   const dispatch = useDispatch();
//   const employees = useSelector((state) => state.employees.employees); // Assuming you have a root state named 'employees'

//   useEffect(() => {
//     dispatch(fetchEmployees());
//   }, [dispatch]);

//   const handleDeleteEmployee = (id) => {
//     // Dispatch the deleteEmployee action
//     dispatch(deleteEmployee(id));
//   };

//   return (
//     <div>
//       <AddEmployee />
//       <h2>Employee List</h2>
//       <ul>
//         {employees.map((employee) => (
//           <li key={employee.id}>
//             <strong>Name:</strong> {employee.name}<br />
//             <strong>Email:</strong> {employee.email}<br />
//             <strong>Phone:</strong> {employee.phone}<br />
//             <strong>Gender:</strong> {employee.gender}<br />
//             <strong>DOB:</strong> {employee.dob}<br />
//             <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeList;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../../action/employeeAction'; // Update with the correct path
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleFillForm = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <AddEmployee />
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>Name:</strong> {employee.name}<br />
            <strong>Email:</strong> {employee.email}<br />
            <strong>Phone:</strong> {employee.phone}<br />
            <strong>Gender:</strong> {employee.gender}<br />
            <strong>DOB:</strong> {employee.dob}<br />
            <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
            <button onClick={() => handleFillForm(employee)}>Fill Form</button>
          </li>
        ))}
      </ul>

      {selectedEmployee && (
        <UpdateEmployee
          initialValues={{
            name: selectedEmployee.name,
            email: selectedEmployee.email,
            phone: selectedEmployee.phone,
            gender: selectedEmployee.gender,
            dob: selectedEmployee.dob,
          }}
        />
      )}
    </div>
  );
};

export default EmployeeList;
