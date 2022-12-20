import { useContext } from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfLengthCart = cartCtx.items.reduce((curentNumber, item) => {
    return curentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfLengthCart}</span>
    </button>
  );
};

export default HeaderCartButton;
