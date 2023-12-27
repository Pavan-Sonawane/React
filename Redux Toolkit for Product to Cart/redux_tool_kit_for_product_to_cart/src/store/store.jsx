import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    
  },
  middleware: [thunk, ...getDefaultMiddleware()]
});
