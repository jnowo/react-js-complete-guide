import styles from './Cart.module.css';
import {Modal} from "../UI/Modal";
import {CartContext} from "../../store/cart-context";
import {useContext, useState} from "react";
import CartItem from "./CartItem";
import {Checkout} from "./Checkout";

export const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  }

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(`${process.env.REACT_APP_FIREBASE_URL}orders.json`, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = (<ul className={styles['cart-items']}>{cartCtx.items
      .map((item) => (<CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        //bind ensures that id of removed item is passed to remove handler.
        onAdd={cartItemAddHandler.bind(null, item)}/>)
      )}</ul>
  );

  const modalActions = <div className={styles.actions}>
    <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
  </div>;

  const cartModalContetnt = (<>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingContent = <p>Sending order data...</p>;
  const didSubmitModalContent = <><p>Successfully sent the order!</p>
    <div className={styles.actions}>
      <button className={styles.button} onClick={props.onClose}>Close</button>
    </div>
  </>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContetnt}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}