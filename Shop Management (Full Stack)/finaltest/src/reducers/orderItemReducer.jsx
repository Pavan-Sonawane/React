// orderItemReducer.js
import { actionTypes } from '../actions/orderItemActions';

const initialState = {
  orderItems: [],
};

const orderItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDER_ITEMS:
      return {
        ...state,
        orderItems: action.payload,
      };
    case actionTypes.ADD_ORDER_ITEM:
      return {
        ...state,
        orderItems: [...state.orderItems, action.payload],
      };
      case actionTypes.UPDATE_ORDER_ITEM:
        return {
          ...state,
          orderItems: state.orderItems.map((item) =>
            item.orderItemId === action.payload.orderItemId ? action.payload : item
          ),
        };
    case actionTypes.DELETE_ORDER_ITEM:
      return {
        ...state,
        orderItems: state.orderItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default orderItemReducer;
