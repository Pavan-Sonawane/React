
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { baseUrl} from '../baseUrl';
import { ADD_DEPARTMENT } from './actionTypes';
const apiUrl = `${baseUrl}/Department/GetAll`;

export const fetchDepartments = () => {
  return dispatch => {
    axios.get(apiUrl)
      .then(response => {
        dispatch({
          type: actionTypes.FETCH_DEPARTMENTS,
          payload: response.data
        });
      })
      .catch(error => {
        // Handle error
      });
  };
};

const addDepartmentSuccess = () => ({
  type: ADD_DEPARTMENT,
});

export const addDepartment = (departmentData) => {
  return (dispatch) => {
    axios.post('https://localhost:7090/api/Department/Create', departmentData)
      .then(() => {
        dispatch(addDepartmentSuccess());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};


export const updateDepartment = (department) => {
  return dispatch => {
    axios.put(`${baseUrl}/Department/Update`, department)
      .then(response => {
        dispatch({
          type: actionTypes.UPDATE_DEPARTMENT,
          payload: response.data
        });
      })
      .catch(error => {
        
      });
  };
};

export const deleteDepartment = (id) => {
  return dispatch => {
    axios.delete(`${baseUrl}/Department/DeleteById/${id}`)
    
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_DEPARTMENT,
          payload: id
        });
      })
  };
};