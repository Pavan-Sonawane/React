import api from '../services/api';

export const actionTypes = {
  FETCH_ORDERS: 'FETCH_ORDERS',
  ADD_ORDER: 'ADD_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  DELETE_ORDER: 'DELETE_ORDER',
  FETCH_PRODUCTS_BY_ORDER_ID: 'FETCH_PRODUCTS_BY_ORDER_ID',
};

export const fetchOrders = () => async (dispatch) => {
  try {
    const response = await api.get('/Order/GetAllOrders'); 
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: response.data });
  } catch (error) {
    console.error('Error fetching orders:', error);
    
  }
};

export const addOrder = (order) => async (dispatch) => {
  try {
    const response = await api.post('/Order/InsertOrder', order); 
    dispatch({ type: actionTypes.ADD_ORDER, payload: response.data });
  } catch (error) {
    console.error('Error adding order:', error);
   
  }
};

export const updateOrder = (orderId, updatedOrder) => async (dispatch) => {
  try {
    const response = await api.put(`/Order/UpdateOrder/${orderId}`, updatedOrder);
    dispatch({ type: actionTypes.UPDATE_ORDER, payload: response.data });
  } catch (error) {
    console.error('Error updating order:', error);
    
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  try {
    const response = await api.delete(`/Order/DeleteOrder?Id=${orderId}`);
    dispatch({ type: actionTypes.DELETE_ORDER, payload: orderId });
  } catch (error) {
    console.error('Error deleting order:', error);
  }
};
export const fetchProductsByOrderId = (orderId) => async (dispatch) => {
  try {
    const response = await api.get(`/Order/${orderId}/products`);
    console.log("Action Data", response.data); 
    dispatch({ type: actionTypes.FETCH_PRODUCTS_BY_ORDER_ID, payload: response.data });
  } catch (error) {
    console.error('Error fetching products by orderId:', error);
    throw error; 
  }
};
