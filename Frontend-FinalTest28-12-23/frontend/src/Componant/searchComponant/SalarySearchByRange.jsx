
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSalariesByRange } from '../../action/searchAction';
import api from '../../services/api';

const SalarySearchByRange = () => {
  const dispatch = useDispatch();
  const salaries = useSelector(state => state.search.salaries);
  console.log('Redux State:', useSelector(state => state));

  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState({});

  const handleSearch = () => {
    dispatch(searchSalariesByRange(minSalary, maxSalary));
  };

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const employeeIds = salaries.map(salary => salary.empId);
        const promises = employeeIds.map(empId =>
          api.get(`Employee/${empId}`)
        );

        const responses = await Promise.all(promises);

        const details = responses.reduce((acc, response) => {
          acc[response.data.id] = response.data.name;
          return acc;
        }, {});

        setEmployeeDetails(details);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    if (salaries.length > 0) {
      fetchEmployeeDetails();
    }
  }, [salaries]);

  return (
    <div>
      <h2>Salary Range Search</h2>
      <div>
        <label>Min Salary:</label>
        <input type="text" value={minSalary} onChange={(e) => setMinSalary(e.target.value)} />
      </div>
      <div>
        <label>Max Salary:</label>
        <input type="text" value={maxSalary} onChange={(e) => setMaxSalary(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search</button>

      <div>
        <h3>Search Results:</h3>
        {salaries.map(salary => (
          <div key={salary.id}>
            <p>Employee Name: {employeeDetails[salary.empId]}</p>
            <p>Amount: {salary.amount}</p>
            <p>Date: {salary.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalarySearchByRange;
