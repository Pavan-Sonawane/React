import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDepartment } from '../../action/DepartmentAction'; 
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

      dispatch(addDepartment(newDepartment));

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
