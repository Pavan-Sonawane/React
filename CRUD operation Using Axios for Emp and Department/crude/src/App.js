import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './componants/Layout';
import Home from './componants/Home';
import DepartmentList from './componants/DepartmentList';

import 'bootstrap/dist/css/bootstrap.min.css';  
import EmployeeList from './componants/EmployeeList';
import AddEmployee from './componants/AddEmployee';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="departmentlist" element={<DepartmentList/>} />
        <Route path="employeelist" element={<EmployeeList/>} />
        <Route path="addemployee" element={<AddEmployee/>} />

      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  </Provider>
  );
}

export default App;
