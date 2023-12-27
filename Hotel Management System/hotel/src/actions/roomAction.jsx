
import * as actionTypes from './actionTypes';
import api from '../services/api';

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get('Room');
  console.log("Roomdata",response)
  dispatch({ type: actionTypes.FETCH_Room, payload: response.data });
};

export const addRoom = (product) => async (dispatch) => {
  const response = await api.post('Room', product);
  dispatch({ type: actionTypes.ADD_Room, payload: response.data });
};


export const updateProduct = (ProductId, product) => async (dispatch) => {
  try {
    const response = await api.put(`/Product/${ProductId}`, product);
    dispatch({ type: actionTypes.UPDATE_Room, payload: response.data });
  } catch (error) {
    console.error("Error updating product:", error);
    
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  await api.delete(`/Product/${id}`);
  dispatch({ type: actionTypes.DELETE_Room, payload: id });
}; 


