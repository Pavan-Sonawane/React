
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import orderItemReducer from './orderItemReducer';
import orderReducer from './orderReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: productReducer,
  orderItems: orderItemReducer,
  orders: orderReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;
