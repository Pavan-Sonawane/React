import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSalary } from '../../action/salaryAction';
import { fetchEmployees } from '../../action/employeeAction';

const UpdateSalary = ({ initialValues, onUpdate }) => {
  const dispatch = useDispatch();
  const [eid, setId] = useState(initialValues.id);
  const [empId, setEmpId] = useState(initialValues.empId);
  const [amount, setAmount] = useState(initialValues.amount);
  const [date, setDate] = useState(initialValues.date);

  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleUpdateSalary = () => {
    const updatedSalary = {
      id: eid,
      empId,
      amount,
      date,
    };

    dispatch(updateSalary(initialValues.id, updatedSalary));

    onUpdate();
  };

  useEffect(() => {
    setId(initialValues.id);
    setEmpId(initialValues.empId);
    setAmount(initialValues.amount);
    setDate(initialValues.date);
  }, [initialValues]);

  return (
    <div>
      <h2>Update Salary</h2>
      {/* <div>
        <label htmlFor="eid">Salary ID:</label>
        <input type="number" id="eid" value={eid} onChange={(e) => setId(e.target.value)} />
      </div> */}
      <div>
        <label htmlFor="empId">Employee Name:</label>
        <select
          id="empId"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        >
          <option value="">Select Employee</option>
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
      <button onClick={handleUpdateSalary}>Update Salary</button>
    </div>
  );
};

export default UpdateSalary;
