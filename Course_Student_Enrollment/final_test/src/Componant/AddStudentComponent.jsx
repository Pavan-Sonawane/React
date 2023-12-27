import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentAsync } from '../features/Student/studentSlice';

const AddStudentComponent = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudentAsync(formData));
    setFormData({
      studentId: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: ''
    });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentComponent;
