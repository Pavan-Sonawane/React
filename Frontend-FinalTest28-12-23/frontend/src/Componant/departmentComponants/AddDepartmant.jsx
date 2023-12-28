// Import necessary dependencies
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDepartment } from '../../action/DepartmentAction'; // Update with the correct path

const AddDepartment = () => {
  const dispatch = useDispatch();
  const [departmentName, setDepartmentName] = useState('');

  const handleInputChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleAddDepartment = () => {
    if (departmentName.trim() !== '') {
      const newDepartment = {
        name: departmentName.trim(),
      };

      // Dispatch the action to add the department
      dispatch(addDepartment(newDepartment));

      // Clear the input field after adding the department
      setDepartmentName('');
    } else {
      alert('Please enter a valid department name');
    }
  };

  return (
    <div>
      <h2>Add Department</h2>
      <div>
        <label htmlFor="departmentName">Department Name:</label>
        <input
          type="text"
          id="departmentName"
          value={departmentName}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddDepartment}>Add Department</button>
    </div>
  );
};

export default AddDepartment;
