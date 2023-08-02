import Header from "./Component/Layout/Header";
import React, { useState, useContext } from "react";
import Meal from "./Meal/Meal";
import Cart from "./Cart/Cart";
import CartProvider from "./CartProvider/CartProvider";
import CartStore from "./CartProvider/CartStore";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const cartCtx = useContext(CartStore);
  const showCart = () => {
    setCartShow(true);
  };
  const hideCart = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
