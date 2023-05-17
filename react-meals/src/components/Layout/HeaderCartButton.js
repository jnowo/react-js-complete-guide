import styles from './HeaderCartButton.module.css';
import {CartIcon} from "../Cart/CartIcon";
import {CartContext} from "../../store/cart-context";
import {useContext, useEffect, useState} from "react";

export const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlited ? styles.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [items]);


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}