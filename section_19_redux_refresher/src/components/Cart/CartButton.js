import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart";

const CartButton = (props) => {

  const itemsCounter = useSelector(state => state.cart.itemsCounter);
  const dispatch = useDispatch();
  const cartVisibilityHandler = () => {
    dispatch(cartActions.toggleCartVisibility());
  }

  return (
    <button className={classes.button} onClick={cartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCounter}</span>
    </button>
  );
};

export default CartButton;
