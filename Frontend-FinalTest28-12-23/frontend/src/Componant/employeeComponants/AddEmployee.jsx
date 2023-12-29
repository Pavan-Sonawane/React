
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../action/employeeAction';
import { fetchDepartments } from '../../action/DepartmentAction';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [selectedDeptId, setSelectedDeptId] = useState('');
  const [departmentName, setDepartmentName] = useState('');

  const handleAddEmployee = () => {
    if (!name || !email || !phone || !gender || !dob || !selectedDeptId) {
      alert('Please fill in all required fields.');
      return;
    }

    const selectedDepartment = departments.find((dept) => dept.id === selectedDeptId);
    const selectedDepartmentName = selectedDepartment ? selectedDepartment.name : '';

    const newEmployee = {
      id: 0,
      name,
      email,
      phone,
      gender,
      dob,
      deptId: selectedDeptId,
      departmentName: selectedDepartmentName,
    };

    dispatch(addEmployee(newEmployee));

    setName('');
    setEmail('');
    setPhone('');
    setGender('');
    setDob('');
    setSelectedDeptId('');
    setDepartmentName('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
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
        <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
        >
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
        <label htmlFor="deptId">Department:</label>
        <select
          id="deptId"
          value={selectedDeptId}
          onChange={(e) => {
            setSelectedDeptId(e.target.value);
            const selectedDepartment = departments.find((dept) => dept.id === e.target.value);
            setDepartmentName(selectedDepartment ? selectedDepartment.name : '');
          }}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>
      
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};

export default AddEmployee;
