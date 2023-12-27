import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const OrderSearch = () => {
  const [orderId, setOrderId] = useState('');
  const [productDetails, setProductDetails] = useState([]);
  const [error, setError] = useState('');

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
    setProductDetails([]);
    setError('');
  };

  const handleSearchOrder = async () => {
    try {
      const response = await fetch(`https://localhost:7157/api/Order/${orderId}/products`);

      if (!response.ok) {
        throw new Error(`Failed to fetch product details. Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Product Details API Response:', data);
        setProductDetails(data);
        setError('');
      } else if (contentType && contentType.includes('text/plain')) {
        const textData = await response.text();
        console.log('Plain Text API Response:', textData);
        setProductDetails([]);
        setError(textData);
      } else {
        setProductDetails([]);
        setError(`Invalid response format. Content-Type: ${contentType}`);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
      setProductDetails([]);
      setError(`Error fetching product details: ${error.message}`);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Order Search
      </Typography>

      <TextField
        label="Search Order ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={orderId}
        onChange={handleOrderIdChange}
      />

      <Button variant="contained" color="primary" onClick={handleSearchOrder}>
        Search Order
      </Button>

      {error && (
        <Typography variant="body1" color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}

      {productDetails.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Product Details
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productDetails.map((product) => (
                <TableRow key={product.productId}>
                  <TableCell>{product.productId}</TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stockQuantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Paper>
  );
};

export default OrderSearch;
