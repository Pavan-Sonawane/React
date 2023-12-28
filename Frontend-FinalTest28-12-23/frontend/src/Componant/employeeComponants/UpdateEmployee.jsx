import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../action/employeeAction'; // Update with the correct path

const UpdateEmployee = ({ employee, onUpdate, onCancel }) => {
  const dispatch = useDispatch();

  // Local state to track input values
  const [name, setName] = useState(employee?.name || '');
  const [email, setEmail] = useState(employee?.email || '');
  const [phone, setPhone] = useState(employee?.phone || '');
  const [gender, setGender] = useState(employee?.gender || '');
  const [dob, setDob] = useState(employee?.dob || '');

  // Function to handle form submission
  const handleUpdateEmployee = () => {
    // Validate input fields (add more validation if needed)
    if (!name || !email || !phone || !gender || !dob) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create an updated employee object with the input values
    const updatedEmployee = {
      ...employee,
      name,
      email,
      phone,
      gender,
      dob,
    };

    // Dispatch the updateEmployee action
    dispatch(updateEmployee(employee.id, updatedEmployee));

    // Notify the parent component about the update
    onUpdate();

    // Clear the form fields after updating the employee
    setName('');
    setEmail('');
    setPhone('');
    setGender('');
    setDob('');
  };

  useEffect(() => {
    // Set the local state when the employee prop changes
    if (employee) {
      setName(employee.name || '');
      setEmail(employee.email || '');
      setPhone(employee.phone || '');
      setGender(employee.gender || '');
      setDob(employee.dob || '');
    }
  }, [employee]);

  return (
    <div>
      <h2>Update Employee</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      </div>
      <div>
        <label htmlFor="dob">DOB:</label>
        <input type="text" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <button onClick={handleUpdateEmployee}>Update Employee</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdateEmployee;
