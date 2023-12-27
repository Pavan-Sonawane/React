
import { combineReducers } from 'redux';
import departmentReducer from './departmentReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  departments: departmentReducer,
  employees: employeeReducer,
 
});

export default rootReducer;
