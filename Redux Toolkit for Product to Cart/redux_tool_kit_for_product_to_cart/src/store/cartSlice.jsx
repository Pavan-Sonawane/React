// import { createSlice } from '@reduxjs/toolkit';

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.filter(item => item.id !== action.payload.id);
//     },
//     updateQuantity(state, action) {
//       // const { item, quantity } = action.payload;
//       const { id, quantity } = action.payload;
//       const existingItem = state.find(i => i.id === id);

//       if (existingItem) {
//         existingItem.quantity = quantity;
//       }
//     },
    
//   },
  
// });

// export const { addToCart, removeFromCart,updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;
// Assuming your cartSlice.js looks something like this
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
