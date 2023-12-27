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

const SearchCategory = () => {
  const [cartId, setCartId] = useState('');
  const [categoryData, setCategoryData] = useState(null);
  const [error, setError] = useState('');

  const handleCartIdChange = (e) => {
    setCartId(e.target.value);
    setCategoryData(null);
    setError('');
  };

  const handleSearchCart = async () => {
    try {
      const response = await fetch(`https://localhost:7157/api/Cart/ById?cartId=${cartId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch category data. Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Category Data API Response:', data);
        setCategoryData(data);
        setError('');
      } else if (contentType && contentType.includes('text/plain')) {
        const textData = await response.text();
        console.log('Plain Text API Response:', textData);
        setCategoryData(null);
        setError(textData);
      } else {
        setCategoryData(null);
        setError(`Invalid response format. Content-Type: ${contentType}`);
      }
    } catch (error) {
      console.error('Error fetching category data:', error);
      setCategoryData(null);
      setError(`Error fetching category data: ${error.message}`);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Search Category
      </Typography>

      <TextField
        label="Search Cart ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cartId}
        onChange={handleCartIdChange}
      />

      <Button variant="contained" color="primary" onClick={handleSearchCart}>
        Search Category
      </Button>

      {error && (
        <Typography variant="body1" color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}

      {categoryData && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Category Data
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Property</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(categoryData).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{JSON.stringify(value)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Paper>
  );
};

export default SearchCategory;
