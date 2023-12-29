
import { SALARY_RANGE_SEARCH, SALARY_SEARCH_BY_DEPARTMENT, EMPLOYEE_SEARCH } from '../action/actionTypes';
import api from '../services/api';


export const searchSalariesByRange = (minSalary, maxSalary) => async (dispatch) => {
  try {
    const response = await api.get(`Salary/salary-range?minSalary=${minSalary}&maxSalary=${maxSalary}`);
  
    const payload = response.data.map((salary) => ({
      id: salary.id,
      empId: salary.empId,
      amount: salary.amount,
      date: salary.date,
    }));
  
    dispatch({
      type: SALARY_RANGE_SEARCH,
      payload,
    });
  } catch (error) {
    console.error("Error searching salaries by range:", error);
  }
};

export const searchSalariesByDepartment = (departmentId, year) => async (dispatch) => {
  try {
    const response = await api.get(`Salary/department-salary?departmentId=${departmentId}&year=${year}`);
    console.log('API Response:', response.data);
  
    dispatch({
      type: SALARY_SEARCH_BY_DEPARTMENT,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error searching salaries by department:", error);
  }
};

export const searchEmployees = (employeeName) => async (dispatch) => {
  try {
    const response = await api.get(`Employee/search?employeeName=${employeeName}`);
    console.log('API Response:', response.data);

    dispatch({
      type: EMPLOYEE_SEARCH,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error searching employees:", error);
  }
};
