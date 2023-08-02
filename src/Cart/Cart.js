import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartStore from "../CartProvider/CartStore";
import CartItem from "./CartItem";
import React, { useContext } from "react";

const Cart = (props) => {
  const cartCTX = useContext(CartStore);

  const cartAdd = (item) => {
    cartCTX.addItem({ ...item, quan: 1 });
  };
  const cartRemove = (item) => {
    cartCTX.removeItem(item.id);
  };
  // const items = [{ id: "c1", name: "shusi", amount: 2, price: 12.99 }];
  const cartItem = cartCTX.item.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.quan}
      onRemove={cartRemove.bind(null, item)}
      onAdd={cartAdd.bind(null, item)}
    ></CartItem>
  ));
  const total = cartCTX.total.toFixed(2);
  const hasOrder = cartCTX.item.length > 0;
  return (
    <Model hideCart={props.hideCart}>
      <ul className={classes["cart-items"]}>{cartItem}</ul>
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>${total}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        {hasOrder && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
