import React, { useState } from 'react';
import api from '../../services/api'; // Adjust the path based on your project structure

const SalaryByDepartmentSearch = () => {
  const [salaries, setSalaries] = useState([]);
  const [departmentId, setDepartmentId] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = async () => {
    try {
      const response = await api.get(`Salary/department-salary?departmentId=${departmentId}&year=${year}`);
      if (response.status === 200) {
        setSalaries(response.data);
      } else {
        console.error('Error searching salaries by department:', response.data);
      }
    } catch (error) {
      console.error('Error searching salaries by department:', error);
    }
  };

  return (
    <div>
      <h2>Salary Search By Department</h2>
      <div>
        <label>Department ID:</label>
        <input type="text" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search</button>

      <div>
        <h3>Search Results:</h3>
        {salaries &&
          salaries.map((result) => (
            <div key={result.departmentId}>
              <p>Department ID: {result.departmentId}</p>
              <p>Department Name: {result.departmentName}</p>
              <p>Month: {result.month}</p>
              <p>Total Salary: {result.totalSalary}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SalaryByDepartmentSearch;
