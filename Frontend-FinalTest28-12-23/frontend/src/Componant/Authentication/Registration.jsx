import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRegistration } from '../../action/employeeAction'; 
import { useNavigate,Link } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAddRegistration = () => {
    if (!name || !email || !phone || !gender || !dob || !password || !confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    // Assuming you have a similar structure in your action
    const newRegistration = {
      email,
      password,
      confirmPassword,
      gender,
      name,
      phone,
    };

    dispatch(addRegistration(newRegistration));

    setName('');
    setEmail('');
    setPhone('');
    setGender('');
    setDob('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>Registration</h2>
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
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="dob">DOB:</label>
        <input type="datetime-local" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleAddRegistration}>Register</button>
      <p>
        Already have an account? <Link to="/login">Back To sign-in</Link>.
      </p>
    </div>
  );
};

export default Registration;
