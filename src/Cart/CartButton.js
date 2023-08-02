import Icon from "../icon/Icon";
import classes from "./CartButton.module.css";
import React, { useContext, useState, useEffect } from "react";
import CartStore from "../CartProvider/CartStore";
const CartButton = (props) => {
  const cartCtx = useContext(CartStore);
  const [buttonHigh, setButtonHigh] = useState(false);
  const quan = cartCtx.item.reduce((acc, item) => {
    return acc + item.quan;
  }, 0);

  const { item } = cartCtx;

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setButtonHigh(true);

    const timer = setTimeout(() => {
      setButtonHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);
  const classN = `${classes.button} ${buttonHigh ? classes.bump : ""}`;
  return (
    <button className={classN} onClick={props.showCart}>
      <span className={classes.icon}>
        <Icon></Icon>
      </span>
      <span>CART</span>
      <span className={classes.badge}>{quan}</span>
    </button>
  );
};
export default CartButton;
