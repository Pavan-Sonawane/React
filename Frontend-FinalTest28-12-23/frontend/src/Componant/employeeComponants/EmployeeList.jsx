import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../../action/employeeAction';
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

  const handleUpdate = () => {
    setSelectedEmployee(null); 
  };
  return (
    <div>
      <AddEmployee />
      <h2>Employee List</h2>
      <ul>
        {employees && employees.map((employee) => (
          <li key={employee.id}>
            <strong>Name:</strong> {employee.name}<br />
            <strong>Email:</strong> {employee.email}<br />
            <strong>Phone:</strong> {employee.phone}<br />
            <strong>Gender:</strong> {employee.gender}<br />
            <strong>DOB:</strong> {employee.dob}<br />
           
            <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
            <button onClick={() => handleFillForm(employee)}>Click To Update</button>
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
            id: selectedEmployee.id,
          }}
          onUpdate={handleUpdate} 
        />
      )}
    </div>
  );
};

export default EmployeeList;