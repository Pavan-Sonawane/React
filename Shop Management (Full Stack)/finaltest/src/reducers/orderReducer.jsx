
import { actionTypes } from '../actions/orderAction';

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case actionTypes.DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case actionTypes.UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
      };
    case actionTypes.FETCH_PRODUCTS_BY_ORDER_ID:
      console.log('Reducer Data:', action.payload); 
      return {
        ...state,
        products: action.payload,
    };

    default:
      return state;
  }
};

export default orderReducer;
