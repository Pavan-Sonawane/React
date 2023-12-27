import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/departmentlist" className="nav-item nav-link">DepartmentList</Link>
              <Link to="/employeelist" className="nav-item nav-link">Employee List</Link>
              <Link to="/addemployee" className="nav-item nav-link">Add Employee </Link>
          </div>
        <div className="ml-auto"></div>
      </nav>
      <Outlet/>
    </>
  )
};

export default Layout;