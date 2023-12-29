import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSalary } from '../../action/salaryAction';
import { fetchEmployees } from '../../action/employeeAction';

const AddSalary = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  const [empId, setEmpId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleAddSalary = () => {
    const newSalary = {
      id: 0,
      empId,
      amount,
      date,
    };

    dispatch(addSalary(newSalary));

    setEmpId(0);
    setAmount(0);
    setDate(new Date().toISOString());
  };

  return (
    <div>
      <h2>Add Salary</h2>
      <div>
        <label htmlFor="empId">Employee Name:</label>
        <select
          id="empId"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        >
          <option value="0">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="datetime-local" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button onClick={handleAddSalary}>Add Salary</button>
    </div>
  );
};

export default AddSalary;
