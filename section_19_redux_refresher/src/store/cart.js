import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {items: []};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.total += action.payload.price;
      } else {
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
          title: action.payload.title
        });
      }
    },
    removeItemFromCart(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      } else {
        item.quantity--;
        item.total -= item.price;
      }
    },
  }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;