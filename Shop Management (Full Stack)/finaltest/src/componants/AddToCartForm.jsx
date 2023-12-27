import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const AddToCartForm = () => {
  const dispatch = useDispatch();

  // State to manage form input values
  const [productData, setProductData] = useState({
    productId: '',
    quantity: '',
    productName: '',
    price: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled before dispatching
    if (productData.productId && productData.quantity && productData.productName && productData.price) {
      // Dispatch the addToCart action with the productData
      dispatch(addToCart(productData));

      // Optionally, you can clear the form or perform other actions after adding to the cart
      setProductData({
        productId: '',
        quantity: '',
        productName: '',
        price: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="number"
            name="productId"
            value={productData.productId}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default AddToCartForm;
