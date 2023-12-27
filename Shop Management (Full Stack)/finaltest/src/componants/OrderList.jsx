import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../actions/orderAction';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

 

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

 

  return (
    <div>
      <Typography variant="h4">All Orders</Typography>
      <div>
        {/* <Typography variant="h5">Add Order</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
             
              type="datetime-local"
              value={newOrderData.orderDate}
              onChange={(e) => setNewOrderData({ ...newOrderData, orderDate: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Total Amount"
              type="text"
              value={newOrderData.totalAmount}
              onChange={(e) => setNewOrderData({ ...newOrderData, totalAmount: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddOrder}>
              Add Order
            </Button>
          </Grid>
        </Grid> */}
      </div>
      <div>
      
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1">Order ID</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Order Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Total Amount</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.orderID}</TableCell>
                  <TableCell>{new Date(order.orderDate).toLocaleString()}</TableCell>
                  <TableCell>{order.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderList;
