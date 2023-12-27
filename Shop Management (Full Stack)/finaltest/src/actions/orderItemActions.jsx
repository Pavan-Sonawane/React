
import api from '../services/api';


export const actionTypes = {
  FETCH_ORDER_ITEMS: 'FETCH_ORDER_ITEMS',
  ADD_ORDER_ITEM: 'ADD_ORDER_ITEM',
  UPDATE_ORDER_ITEM: 'UPDATE_ORDER_ITEM',
  DELETE_ORDER_ITEM: 'DELETE_ORDER_ITEM',
};


export const fetchOrderItems = () => async (dispatch) => {
  try {
    const response = await api.get('/OrderItem/GetAll'); 
    console.log(response)
    dispatch({ type: actionTypes.FETCH_ORDER_ITEMS, payload: response.data });
  } catch (error) {
    console.error('Error fetching order items:', error);
    
  }
};

export const addOrderItem = (orderItem) => async (dispatch) => {
  try {
    const response = await api.post('/OrderItem/Add', orderItem); 
    dispatch({ type: actionTypes.ADD_ORDER_ITEM, payload: response.data });
  } catch (error) {
    console.error('Error adding order item:', error);
 
  }
};

export const updateOrderItem = (orderItemId, updatedOrderItem) => async (dispatch) => {
  try {
    console.log('Updating Order Item. Payload:', updatedOrderItem);
    const response = await api.put(`/OrderItem/${orderItemId}`, updatedOrderItem); 
    dispatch({ type: actionTypes.UPDATE_ORDER_ITEM, payload: response.data });
  } catch (error) {
    console.error('Error updating order item:', error);
  }
};


export const deleteOrderItem = (orderItemId) => async (dispatch) => {
  try {
    await api.delete(`/orderItem/${orderItemId}`); 
    dispatch({ type: actionTypes.DELETE_ORDER_ITEM, payload: orderItemId });
  } catch (error) {
    console.error('Error deleting order item:', error);
    
  }
};
