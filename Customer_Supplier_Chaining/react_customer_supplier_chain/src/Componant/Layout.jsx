import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/logincomponant" className="nav-item nav-link">Login Componant</Link>
              {/*<Link to="/counter" className="nav-item nav-link">Counter</Link> */}
          </div>
        <div className="ml-auto"></div>
      </nav>
      <Outlet/>
    </>
  )
};

export default Layout;