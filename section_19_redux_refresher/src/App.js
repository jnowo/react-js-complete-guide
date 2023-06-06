import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending data...',
        message: 'Sending cart data!',
      }));

      const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}cart.json`, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Send cart data successfully!',
      }));

      const responseData = await response.json();
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Send cart data failed!',
      }));
    });
  }, [cart, dispatch])


  return (
    <>
      {notification &&
        <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {cartIsVisible && <Cart/>}
        <Products/>
      </Layout>
    </>
  );
}

export default App;
