import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="productlist" className="nav-item nav-link">ProductList</Link>
              <Link to="categories" className="nav-item nav-link">Categories</Link>
          
          </div>
        <div className="ml-auto"></div>
      </nav>
      <Outlet/>
    </>
  )
};

export default Layout;