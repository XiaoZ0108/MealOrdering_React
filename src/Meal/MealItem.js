import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
import React, { useContext } from "react";
import CartStore from "../CartProvider/CartStore";
const MealItem = (props) => {
  const cartCTX = useContext(CartStore);

  const addCart = (quan) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quan: quan,
    };
    cartCTX.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.desc}>{props.desc}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <MealForm id={props.id} addquan={addCart} />
    </li>
  );
};
export default MealItem;
