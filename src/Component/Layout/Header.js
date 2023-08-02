import classes from "./Header.module.css";
import mealpic from "../../asset/meals.jpg";
import CartButton from "../../Cart/CartButton";
import React, { useContext } from "react";
import CartStore from "../../CartProvider/CartStore";
const Header = (props) => {
  const cartCtx = useContext(CartStore);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactM</h1>
        <CartButton showCart={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealpic} alt={"FOOD"} />
      </div>
    </React.Fragment>
  );
};
export default Header;
