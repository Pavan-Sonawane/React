
import * as actionTypes from '../actions/actionTypes.';
import api from '../services/api';

export const fetchGuests = () => async (dispatch) => {
  try {
    const response = await api.get('Guest');
    dispatch({ type: actionTypes.FETCH_GUESTS, payload: response.data });
  } catch (error) {
    console.error('Error fetching guests:', error);
   
  }
};
export const addGuest = (product) => async (dispatch) => {
  const response = await api.post('Guest', product);
  dispatch({ type: actionTypes.ADD_Guest, payload: response.data });
};


export const updateProduct = (ProductId, product) => async (dispatch) => {
  try {
    const response = await api.put(`Guest/${ProductId}`, product);
    dispatch({ type: actionTypes.UPDATE_Guest, payload: response.data });
  } catch (error) {
    console.error("Error updating product:", error);
    
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  await api.delete(`Guest/${id}`);
  dispatch({ type: actionTypes.DELETE_Guest, payload: id });
}; 


