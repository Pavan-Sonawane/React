import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Componant/Layout/Layout';
import store from './store/store';
import ListDepartment from './Componant/departmentComponants/ListDepartment';
import EmployeeList from './Componant/employeeComponants/EmployeeList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
             <Route path="/" element={<ListDepartment/>} />
             <Route path="employee" element={<EmployeeList/>} />

          </Route>
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
