
import React, { useState, useEffect,fetchData } from 'react';
import api from '../../services/api'; 

const EmployeeSearch = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`Employee/search?employeeName=${searchName}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchName]);

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div>
      <h2>Employee Search</h2>
      <div>
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h2>Employee Details</h2>
      <ul>
        {employeeData.map((employee) => (
          <li key={employee.id}>
            <strong>ID:</strong> {employee.id}<br />
            <strong>Name:</strong> {employee.name}<br />
            <strong>Email:</strong> {employee.email}<br />
            <strong>Phone:</strong> {employee.phone}<br />
            <strong>Gender:</strong> {employee.gender}<br />
            <strong>DOB:</strong> {employee.dob}<br />
            <strong>Department ID:</strong> {employee.deptId}<br />
            <strong>Department Name:</strong> {employee.department.name}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSearch;
