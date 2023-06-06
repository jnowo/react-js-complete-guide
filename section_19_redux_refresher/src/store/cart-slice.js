import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {items: [], itemsCounter: 0, changed: false};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.itemsCounter = action.payload.itemsCounter;

    },
    addItemToCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.total += item.price;
      } else {
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
          title: action.payload.title
        });
      }
      state.itemsCounter++;
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        item.quantity--;
        item.total -= item.price;
      }
      state.itemsCounter--;
      state.changed = true;
    }
  }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;