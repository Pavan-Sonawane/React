import * as actionTypes from './actionTypes';
import api from '../services/api';

export const fetchSalaries = () => async (dispatch) => {
  try {
    const response = await api.get('Salary');
    console.log("Fetch Salaries", response);

    dispatch({ type: actionTypes.FETCH_SALARY, payload: response.data });
  } catch (error) {
    console.error("Error fetching salaries:", error);
  }
};

export const addSalary = (salary) => async (dispatch) => {
  try {
    const response = await api.post('Salary', salary);
    dispatch({ type: actionTypes.ADD_SALARY, payload: response.data });
  } catch (error) {
    console.error("Error adding salary:", error);
  }
};

export const updateSalary = (salaryId, salary) => async (dispatch) => {
  try {
    const response = await api.put(`Salary/${salaryId}`, salary);
    dispatch({ type: actionTypes.UPDATE_SALARY, payload: response.data });
  } catch (error) {
    console.error("Error updating salary:", error);
  }
};

export const deleteSalary = (id) => async (dispatch) => {
  try {
    await api.delete(`Salary/${id}`);
    dispatch({ type: actionTypes.DELETE_SALARY, payload: id });
  } catch (error) {
    console.error("Error deleting salary:", error);
  }
};
