import * as actionTypes from './actionTypes';
import api from '../services/api';

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await api.get('Employee');
    console.log("Fetch Employees", response);
    
    const employees = response.data['$values'];

    dispatch({ type: actionTypes.FETCH_EMPLOYEE, payload: employees });
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

export const addEmployee = (employee) => async (dispatch) => {
  try {
    const response = await api.post('Employee', employee);
    dispatch({ type: actionTypes.ADD_EMPLOYEE, payload: response.data });
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};

export const updateEmployee = (employeeId, employee) => async (dispatch) => {
  try {
    const response = await api.put(`Employee/${employeeId}`, employee);
    dispatch({ type: actionTypes.UPDATE_EMPLOYEE, payload: response.data });
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.delete(`Employee/${id}`);
    dispatch({ type: actionTypes.DELETE_EMPLOYEE, payload: id });
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};
