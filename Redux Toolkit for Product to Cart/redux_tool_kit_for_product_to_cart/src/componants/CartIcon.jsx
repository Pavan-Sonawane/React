
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const CartIcon = () => {
  const totalItemCount = useSelector(state => state.cart.reduce((total, item) => total + (item.quantity || 0), 0));

  return (
    <Link to="/cart"> 
      <Button variant="primary">
        {totalItemCount}
      </Button>
    </Link>
  );
};

export default CartIcon;
