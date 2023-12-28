import { combineReducers } from 'redux';
import departmentReducer from './departmentReducer';
import employeeReducer from './employeeReducer';
import salaryReducer from './salaryReducer';

const rootReducer = combineReducers({
  departments: departmentReducer,
  employees: employeeReducer,
  salaries: salaryReducer,
});

export default rootReducer;
