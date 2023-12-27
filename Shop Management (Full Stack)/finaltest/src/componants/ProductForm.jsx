import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProductForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    stockQuantity: '',
    categoryId: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addProduct action with the form data
    dispatch(addProduct(formData));

    // Reset the form after submission
    setFormData({
      productName: '',
      price: '',
      stockQuantity: '',
      categoryId: '',
    });
  };

  return (
    <Box>
     
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Stock Quantity"
          type="number"
          name="stockQuantity"
          value={formData.stockQuantity}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category ID"
          type="text"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
