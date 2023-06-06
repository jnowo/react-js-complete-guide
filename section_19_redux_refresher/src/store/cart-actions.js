import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}cart.json`);

      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }

      return await response.json();
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Fetching cart data succeed!',
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Fetching cart data failed!',
      }));
    }
  }
}

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