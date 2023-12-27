// cartActions.js

import api from '../services/api';
import {
 
  SEARCH_CATEGORY_REQUEST,
  SEARCH_CATEGORY_SUCCESS,
  SEARCH_CATEGORY_FAILURE,
} from './actionTypes';


export const actionTypes = {
  FETCH_CART: 'FETCH_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
 
};

export const fetchCart = () => async (dispatch) => {
  try {
    const response = await api.get('/Cart/GetAll'); // Assuming an endpoint to fetch the cart
    dispatch({ type: actionTypes.FETCH_CART, payload: response.data });
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
};

export const addToCart = (product) => async (dispatch) => {
  try {
    const response = await api.post('/Cart/Add', product);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: response.data });
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    // Assuming you have an API service named 'api' for making requests
    await api.delete(`/Cart/${productId}`);
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};
// export const updateCartItem = (cartId, updatedData) => async (dispatch) => {
//   try {
//     const response = await api.put(`/Cart/${cartId}`, updatedData);
//     dispatch({ type: actionTypes.UPDATE_CART_ITEM, payload: response.data });
//   } catch (error) {
//     console.error('Error updating cart item:', error);
//   }
// };
export const updateCartItem = (cartId, updatedData) => async (dispatch) => {
  try {
    const response = await api.put(`/Cart/${cartId}`, updatedData);
    dispatch({ type: actionTypes.UPDATE_CART_ITEM, payload: response.data });
  } catch (error) {
    console.error('Error updating cart item:', error);
  }
};

export const searchCategory = (cartId) => async (dispatch) => {
  console.log(cartId)
  try {
    dispatch({ type: SEARCH_CATEGORY_REQUEST });
    const url = `/Cart?cartId=${cartId}`;
    const response = await api.get(url);


    dispatch({ type: SEARCH_CATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error searching category:', error);

    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      dispatch({ type: SEARCH_CATEGORY_FAILURE, payload: error.response.data });
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      dispatch({ type: SEARCH_CATEGORY_FAILURE, payload: 'No response received' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
      dispatch({ type: SEARCH_CATEGORY_FAILURE, payload: error.message });
    }
  }
};



