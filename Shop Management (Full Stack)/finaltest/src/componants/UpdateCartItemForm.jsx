import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../actions/cartActions';

const UpdateCartItemForm = ({ cartItem }) => {
  const dispatch = useDispatch();

  // State to manage form input values
  const [updatedData, setUpdatedData] = useState({
    quantity: '',
    productName: '',
    price: '',
    productId:'',
  });

  // Set initial form values when cartItem changes
  useEffect(() => {
    if (cartItem) {
      setUpdatedData({
        quantity: cartItem.quantity,
        productName: cartItem.productName,
        price: cartItem.price,
        productId:cartItem.productId
      });
    }
  }, [cartItem]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if cartItem is defined before dispatching
    if (cartItem) {
      // Dispatch the updateCartItem action with the cartId and updatedData
      dispatch(updateCartItem(cartItem.cartId, updatedData));
    }
  };

  // Render nothing if cartItem is undefined
  if (!cartItem) {
    return null;
  }

  return (
    <div>
      <h2>Update Cart Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={updatedData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={updatedData.productName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={updatedData.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
        productId
          <input
            type="number"
            name="productId"
            value={updatedData.productId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Update Cart Item</button>
      </form>
    </div>
  );
};

export default UpdateCartItemForm;
