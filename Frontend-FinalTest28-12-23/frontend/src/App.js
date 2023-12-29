// import './App.css';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Componant/Layout/Layout';
// import store from './store/store';
// import ListDepartment from './Componant/departmentComponants/ListDepartment';
// import EmployeeList from './Componant/employeeComponants/EmployeeList';
// import SalaryList from './Componant/salaryComponant/SalaryList';
// import AllSearch from './Componant/searchComponant/AllSearch';
// import AllAuth from './Componant/Authentication/AllAuth';
// import Login from './Componant/Authentication/Login';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Routes>

//             <Route path="/" element={<Layout />}>
//              <Route path="/" element={<ListDepartment/>} />
//              <Route path="employee" element={<EmployeeList/>} />
//              <Route path="salary" element={<SalaryList/>} />
//              <Route path="search" element={<AllSearch/>} />
//              <Route path="Register" element={<AllAuth/>} />
//              <Route path="login" element={<Login/>} />

//           </Route>
//         </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Componant/Layout/Layout';
import store from './store/store';
import ListDepartment from './Componant/departmentComponants/ListDepartment';
import EmployeeList from './Componant/employeeComponants/EmployeeList';
import SalaryList from './Componant/salaryComponant/SalaryList';
import AllSearch from './Componant/searchComponant/AllSearch';
import AllAuth from './Componant/Authentication/AllAuth';
import Login from './Componant/Authentication/Login';
import Registration from './Componant/Authentication/Registration';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to set the authentication status
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              <Route
                index
                element={isLoggedIn ? <ListDepartment /> : <Navigate to="/login" replace />}
              />
              <Route
                path="employee"
                element={isLoggedIn ? <EmployeeList /> : <Navigate to="/login" replace />}
              />
              <Route
                path="salary"
                element={isLoggedIn ? <SalaryList /> : <Navigate to="/login" replace />}
              />
              <Route
                path="search"
                element={isLoggedIn ? <AllSearch /> : <Navigate to="/login" replace />}
              />
              <Route
                path="Register"
                element={isLoggedIn ? <AllAuth /> : <Navigate to="/login" replace />}
              />
            </Route>

            <Route
              path="/login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
             <Route
              path="/registration"
              element={<Registration/>}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
