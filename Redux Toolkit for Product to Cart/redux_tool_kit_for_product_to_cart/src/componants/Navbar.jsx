// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CustomNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
//       {/* <Navbar.Brand as={Link} to="/cart">Cart</Navbar.Brand> */}
//       <Navbar.Brand ></Navbar.Brand>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
// CustomNavbar.js
// CustomNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import shoppingLogo from './shopping-logo-svgrepo-com.svg'
import { NavbarBrand } from 'react-bootstrap';
const CustomNavbar = () => {
  const totalItemCount = useSelector(state => state.cart.reduce((total, item) => total + (item.quantity || 0), 0));

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
       <Navbar.Brand as={Link} to="/">
        <img
          src={shoppingLogo}
          alt="Shopping Logo"
          height="30" 
          className="d-inline-block align-top"
        />
        Online Shopping Website
      </Navbar.Brand>
      <NavbarBrand as={Link} to=''></NavbarBrand>
      <Link to="/cart" className="navbar-brand">Cart(
        <FaShoppingCart />
        {totalItemCount > 0 && <span className="cart-count">{totalItemCount}</span>})
      </Link>
      {/* <Link to="/myorders" className="navbar-brand">My Orders</Link> */}
    </Navbar>
  );
};

export default CustomNavbar;


