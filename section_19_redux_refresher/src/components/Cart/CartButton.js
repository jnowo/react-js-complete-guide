import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";

const CartButton = (props) => {

  const itemsCounter = useSelector(state => state.cart.itemsCounter);
  const dispatch = useDispatch();
  const cartVisibilityHandler = () => {
    dispatch(uiActions.toggleCartVisibility());
  }

  return (
    <button className={classes.button} onClick={cartVisibilityHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCounter}</span>
    </button>
  );
};

export default CartButton;
