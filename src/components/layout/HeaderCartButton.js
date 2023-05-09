import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighLighted, setBtnHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfLengthCart = items.reduce((curentNumber, item) => {
    return curentNumber + item.amount;
  }, 0);

  const cartButton = `${classes.button} ${btnHighLighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnHighLighted(true);

    const timer = setTimeout(() => {
      setBtnHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={cartButton} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfLengthCart}</span>
    </button>
  );
};

export default HeaderCartButton;
