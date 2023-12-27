
import * as actionTypes from './actionTypes';
import api from '../services/api';

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get('Movie');
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const addProduct = (product) => async (dispatch) => {
  const response = await api.post('Movie', product);
  dispatch({ type: actionTypes.ADD_PRODUCT, payload: response.data });
};


export const updateProduct = (ProductId, product) => async (dispatch) => {
  try {
    const response = await api.put(`Movie/${ProductId}`, product);
    dispatch({ type: actionTypes.UPDATE_PRODUCT, payload: response.data });
  } catch (error) {
    console.error("Error updating product:", error);
    
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  await api.delete(`Movie/${id}`);
  dispatch({ type: actionTypes.DELETE_PRODUCT, payload: id });
}; 


export const searchProducts = (productName) => async (dispatch) => {
  try {
    const response = await api.get(`/Product/search?productName=${productName}`);
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching products:", error);
 
  }
};
