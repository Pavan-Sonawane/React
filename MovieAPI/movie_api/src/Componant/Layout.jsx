import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/movielist" className="nav-item nav-link">Movie List</Link>
              <Link to="/newmovie" className="nav-item nav-link">New Movie </Link>
              <Link to="/updatemovie" className="nav-item nav-link">Update Movie </Link>
          </div>
        <div className="ml-auto"></div>
      </nav>
      <Outlet/>
    </>
  )
};

export default Layout;