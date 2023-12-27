import axios from 'axios';
import * as actionTypes from './actionTypes';
import { baseUrl } from '../baseUrl';
import { ADD_EMPLOYEE } from './actionTypes';


const apiUrl = `${baseUrl}/Employee/GetAll`;
export const fetchEmployees  = () => {
  return dispatch => {
    axios.get(apiUrl)
      .then(response => {
        dispatch({
          type: actionTypes.FETCH_EMPLOYEES,
          payload: response.data
        });
      })
      .catch(error => {
      
      });
  };
};

// const addDepartmentSuccess = () => ({
//   type: ADD_EMPLOYEE,
// });

// export const addDepartment = (departmentData) => {
//   return (dispatch) => {
//     axios.post('https://localhost:7090/api/Employee/Create', departmentData)
//       .then(() => {
//         dispatch(addDepartmentSuccess());
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

const addEmployeeSuccess = () => ({
  type: ADD_EMPLOYEE,
});

export const addEmployee = (employeeData) => { console.log(employeeData)
  return (dispatch) => {
    axios.post('https://localhost:7090/api/Employee/Create', employeeData)
      .then(() => {
        dispatch(addEmployeeSuccess());
      })

      .catch((error) => {
        console.error(error);
      });
  };
};

export const UpdateEmployee = (department) => {
  console.log(department); 

  return dispatch => {
   
    axios.put(`${baseUrl}/Employee/Update`, department)
      .then(response => {
        dispatch({
          type: actionTypes.UPDATE_EMPLOYEE,
          payload: response.data
        });
      })
      .catch(error => {
      
        console.error(error);
      });
  };
};


export const deleteDepartment = (id) => {
  return dispatch => {
    axios.delete(`${baseUrl}/Employee/DeleteById/${id}`)
    
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_EMPLOYEE,
          payload: id
        });
      })
  };
};