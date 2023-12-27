import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
  searchProducts,
  addProduct,
} from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import AddProductForm from './ProductForm';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    price: '',
    stockQuantity: '',
    categoryId: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setFormData({
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      stockQuantity: product.stockQuantity,
      categoryId: product.categoryId,
    });
    // Show the update form in the modal
    setShowUpdateForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      dispatch(updateProduct(formData.productId, formData));
    } else {
      dispatch(addProduct(formData));
    }
    setFormData({
      productId: '',
      productName: '',
      price: '',
      stockQuantity: '',
      categoryId: '',
    });
    setSelectedProduct(null);
    // Close the form after submission
    setShowAddForm(false);
    setShowUpdateForm(false);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderFormFields = () => {
    if (selectedProduct) {
      return (
        <>
          <TextField
            type="text"
            name="productId"
            value={formData.productId}
            onChange={handleInputChange}
            disabled
          />
          <br />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h4">Product Search</Typography>
            <Box display="flex" alignItems="center">
            <TextField
              type="text"
              placeholder="Search by product name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth  // Ensures the TextField takes up the full width of its container
              sx={{ height: '99%', borderRadius: '4px' }} // Additional styling for TextField
            />
              <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '29px', marginBottom: '20px' }}>
            <Typography variant="h4">Add Product</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowAddForm(true)}
            >
              Add Product
            </Button>
            <Dialog open={showAddForm} onClose={() => setShowAddForm(false)}>
              <DialogTitle>Add Product</DialogTitle>
              <DialogContent>
                <AddProductForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setShowAddForm(false)} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={3} style={{ padding: '25px', marginBottom: '20px' }}>
        <Typography variant="h4">Product List</Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={4} key={product.productId}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h5">{product.productName}</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary={`ID: ${product.productId}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Price: $${product.price}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Stock Quantity: ${product.stockQuantity}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Category: ${product.categoryId}`} />
                  </ListItem>
                </List>
                <Button
  startIcon={<UpdateIcon />}
  variant="contained"
  color="primary" // Use 'primary' color for the "Update" button
  onClick={() => handleUpdate(product)}
  style={{ marginRight: '5px' }}
>
 
</Button>
<Button
  startIcon={<DeleteIcon />}
  variant="contained"
  color="secondary" // Use 'secondary' color for the "Delete" button
  onClick={() => handleDelete(product.productId)}
  style={{ marginRight: '5px' }}
>
</Button>
<Button
  startIcon={<ShoppingCartIcon />}
  variant="contained"
  color="primary" // Use 'primary' color for the "Add to Cart" button
  onClick={() => handleAddToCart(product)}
>
  Add to Cart
</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {selectedProduct && (
        <Dialog open={showUpdateForm} onClose={() => setShowUpdateForm(false)}>
          <DialogTitle>Update Product</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              {renderFormFields()}
              <TextField
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />
              <br />
              <TextField
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
              <br />
              <TextField
                type="number"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                required
              />
              <br />
              <TextField
                type="text"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
                required
              />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Update Product
              </Button>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowUpdateForm(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ProductList;
