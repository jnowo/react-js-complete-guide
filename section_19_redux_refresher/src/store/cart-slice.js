import {createSlice} from '@reduxjs/toolkit';
import {uiActions} from "./ui-slice";

const initialCartState = {items: [], itemsCounter: 0};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
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
    }
  }
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending data...',
      message: 'Sending cart data!',
    }));

    const sendRequest = async () => {
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}cart.json`, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Send cart data successfully!',
      }));
    } catch (error) {
      sendCartData().catch(error => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Send cart data failed!',
        }));
      });
    }
  };
}

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;