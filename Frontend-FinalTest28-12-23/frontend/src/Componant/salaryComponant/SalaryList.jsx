import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalaries, deleteSalary } from '../../action/salaryAction';
import AddSalary from '../salaryComponant/addSalary';
import UpdateSalary from './UpdateSalary';

const SalaryList = () => {
  const dispatch = useDispatch();
  const salaries = useSelector((state) => state.salaries.salaries);

  useEffect(() => {
    dispatch(fetchSalaries());
  }, [dispatch]);

  const [selectedSalary, setSelectedSalary] = useState(null);

  const handleDeleteSalary = (id) => {
    dispatch(deleteSalary(id));
  };

  const handleFillForm = (salary) => {
    setSelectedSalary(salary);
  };

  const handleUpdate = () => {
    setSelectedSalary(null); 
  };

  return (
    <div>
      <AddSalary />
      <h2>Salary List</h2>
      <ul>
        {salaries.map((salary) => (
          <li key={salary.id}>
            <strong>Employee ID:</strong> {salary.empId || 'N/A'}<br />
            <strong>Amount:</strong> {salary.amount || 'N/A'}<br />
            <strong>Date:</strong> {new Date(salary.date).toLocaleString()}<br />
            <button onClick={() => handleDeleteSalary(salary.id)}>Delete</button>
            <button onClick={() => handleFillForm(salary)}>Update</button>
          </li>
        ))}
      </ul>
      {selectedSalary && (
        <UpdateSalary
          initialValues={{
            id: selectedSalary.id,
            empId: selectedSalary.empId,
            amount: selectedSalary.amount,
            date: selectedSalary.date,
          }}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default SalaryList;