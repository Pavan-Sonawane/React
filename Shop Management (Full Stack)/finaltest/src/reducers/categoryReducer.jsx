

import { actionTypes } from '../actions/categoryActions';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case actionTypes.UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.id ? action.payload : category
        ),
      };
    case actionTypes.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
      };
    default:
      return state;
  }
};

export default categoryReducer;
