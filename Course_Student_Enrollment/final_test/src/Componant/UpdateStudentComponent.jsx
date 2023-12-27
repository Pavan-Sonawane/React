import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudentAsync } from '../features/Student/studentSlice';

const UpdateStudentComponent = ({ student }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    id: ''
  });

  useEffect(() => {
    if (student) {
      setFormData({
        studentId: student.studentId,
        firstName: student.firstName,
        lastName: student.lastName,
        dateOfBirth: student.dateOfBirth,
        address: student.address,
        id: student.id
      });
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudentAsync(formData));
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="id"> ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudentComponent;
