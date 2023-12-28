import React, { useState } from 'react';

const UpdateDepartment = ({ department, onUpdateDepartment, onCancel ,id}) => {
  const [updatedName, setUpdatedName] = useState(department.name);

  const handleInputChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleUpdateClick = () => {
    if (updatedName.trim() !== '') {
      const updatedDepartment = {
        Id: id,
        name: updatedName.trim(),
      };
      onUpdateDepartment(updatedDepartment);
    } else {
      alert('Please enter a valid department name');
    }
  };
  

  return (
    <div>
      <h2>Update Department</h2>
      <div>
        <label htmlFor="updatedName">Updated Department Name:</label>
        <input
          type="text"
          id="updatedName"
          value={updatedName}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdateDepartment;
