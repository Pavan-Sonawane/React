
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productReducer;
