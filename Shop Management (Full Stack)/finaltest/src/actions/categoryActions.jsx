// categoryActions.js

import api from '../services/api';

export const actionTypes = {
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  ADD_CATEGORY: 'ADD_CATEGORY',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await api.get('/Category/GetAllCategory');
    dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: response.data });
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Handle error actions if needed
  }
};

// export const addCategory = (category) => async (dispatch) => {
//   try {
//     const response = await api.post('/Category/InsertCategory', category);
//     dispatch({ type: actionTypes.ADD_CATEGORY, payload: response.data });
//   } catch (error) {
//     console.error('Error adding category:', error);
//     // Handle error actions if needed
//   }
// };
export const addCategory = (category) => async (dispatch) => {
    try {
      const response = await api.post('/Category/InsertCategory', category);
      dispatch({ type: actionTypes.ADD_CATEGORY, payload: response.data });
    } catch (error) {
      console.error('Error adding category:', error.response); // Log the full error response
  
    }
  };

export const updateCategory = (categoryId, updatedCategory) => async (dispatch) => {
  try {
    // const response = await api.put(`/Category/UpdateCategory/${categoryId}`, updatedCategory);
    const response = await api.put('https://localhost:7157/api/Category/UpdateCategory', updatedCategory);

    dispatch({ type: actionTypes.UPDATE_CATEGORY, payload: response.data });
  } catch (error) {
    console.error('Error updating category:', error);
    
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await api.delete(`/Category/DeleteCategory?Id=${categoryId}`);
    dispatch({ type: actionTypes.DELETE_CATEGORY, payload: categoryId });
  } catch (error) {
    console.error('Error deleting category:', error);
    // Handle error actions if needed
  }
};
