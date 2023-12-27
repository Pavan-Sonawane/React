import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrderItems,
  deleteOrderItem,
  addOrderItem,
} from '../actions/orderItemActions';
import {
  Button,
  Dialog,
 
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderItemList = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.orderItems.orderItems);

  useEffect(() => {
    dispatch(fetchOrderItems());
  }, [dispatch]);

  const handleDelete = (orderItemId) => {
    dispatch(deleteOrderItem(orderItemId));
  };

  const [newOrderItem, setNewOrderItem] = useState({
    orderId: 0,
    productId: 0,
    quantity: 0,
    unitPrice: 0,
  });

  const [isAddOrderItemDialogOpen, setIsAddOrderItemDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewOrderItem({
      ...newOrderItem,
      [name]: value,
    });
  };

  const handleAddOrderItem = () => {
    if (
      newOrderItem.productId === 0 ||
      newOrderItem.quantity === 0 ||
      newOrderItem.unitPrice === 0
    ) {
      console.error('Please fill in all required fields.');
      return;
    }

    dispatch(addOrderItem(newOrderItem));
    setNewOrderItem({
      orderId: 0,
      productId: 0,
      quantity: 0,
      unitPrice: 0,
    });
    setIsAddOrderItemDialogOpen(false);
  };

  const openAddOrderItemDialog = () => {
    setIsAddOrderItemDialogOpen(true);
  };

  const closeAddOrderItemDialog = () => {
    setIsAddOrderItemDialogOpen(false);
  };

  return (
    <div>
      <div>
        <h3>Add New Order Item</h3>
        <Button
          variant="contained"
          color="primary"
          onClick={openAddOrderItemDialog}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add Order Item
        </Button>
      </div>

      <h2>Order Item List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Item ID</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map((orderItem) => (
              <TableRow key={orderItem.orderItemId}>
                <TableCell>{orderItem.orderItemId}</TableCell>
                <TableCell>{orderItem.orderId}</TableCell>
                <TableCell>{orderItem.productId}</TableCell>
                <TableCell>{orderItem.quantity}</TableCell>
                <TableCell>${orderItem.unitPrice}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(orderItem.orderItemId)}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Order Item Dialog */}
      <Dialog
  open={isAddOrderItemDialogOpen}
  onClose={closeAddOrderItemDialog}
  style={{ margin: '30px', padding: '20px' }}
>
  
  <DialogContent style={{ margin: '10px 0' }}>
    <TextField
      label="Order ID"
      type="text"
      name="orderId"
      value={newOrderItem.orderId}
      onChange={handleInputChange}
      fullWidth
      style={{ marginBottom: '10px' }}
    />
    <TextField
      label="Product ID"
      type="text"
      name="productId"
      value={newOrderItem.productId}
      onChange={handleInputChange}
      fullWidth
      style={{ marginBottom: '10px' }}
    />
    <TextField
      label="Quantity"
      type="text"
      name="quantity"
      value={newOrderItem.quantity}
      onChange={handleInputChange}
      fullWidth
      style={{ marginBottom: '10px' }}
    />
    <TextField
      label="Unit Price"
      type="text"
      name="unitPrice"
      value={newOrderItem.unitPrice}
      onChange={handleInputChange}
      fullWidth
      style={{ marginBottom: '10px' }}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={closeAddOrderItemDialog} color="primary">
      Cancel
    </Button>
    <Button onClick={handleAddOrderItem} color="primary">
      Add Order Item
    </Button>
  </DialogActions>
</Dialog>

    </div>
  );
};

export default OrderItemList;
