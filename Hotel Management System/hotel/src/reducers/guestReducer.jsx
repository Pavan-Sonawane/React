
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  guests: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_Guest:
      return { ...state, guests: action.payload };
    case actionTypes.ADD_Guest:
      return { ...state, products: [...state.products, action.payload] };
    case actionTypes.UPDATE_Guest:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case actionTypes.DELETE_Guest:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
     

   
    default:
      return state;
  }
};

export default productReducer;
