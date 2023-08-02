import React, { useContext } from "react";

const CartStore = React.createContext({
  item: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartStore;
