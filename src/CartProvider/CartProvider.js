import CartStore from "./CartStore";
import React, { useReducer } from "react";

const ini = {
  item: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    //const updateItem = state.item.concat(action.item);
    //find existing index
    const existingItemIndex = state.item.findIndex((item) => {
      return item.id === action.item.id;
    });

    let existingItem = state.item[existingItemIndex];
    let updateItem;
    let updateItems;

    if (existingItem) {
      updateItem = {
        ...existingItem,
        quan: existingItem.quan + action.item.quan,
      };
      updateItems = [...state.item];
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems = state.item.concat(action.item);
    }

    const updatePrice = state.amount + action.item.price * action.item.quan;

    return {
      item: updateItems,
      amount: updatePrice,
    };
  }
  if (action.type === "Remove") {
    const existingItemIndex = state.item.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.item[existingItemIndex];
    const updatePrice = state.amount - existingItem.price;

    let updateItem;
    let updateItems;

    if (existingItem.quan === 1) {
      updateItems = state.item.filter((item) => item.id !== action.id);
    } else {
      updateItem = {
        ...existingItem,
        quan: existingItem.quan - 1,
      };
      updateItems = [...state.item];
      updateItems[existingItemIndex] = updateItem;
    }
    return {
      item: updateItems,
      amount: updatePrice,
    };
  }
  return ini;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, ini);

  const addItem = (item) => {
    dispatchCart({ type: "Add", item: item });
  };

  const removeItem = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const CartContext = {
    item: cartState.item,
    total: cartState.amount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartStore.Provider value={CartContext}>
      {props.children}
    </CartStore.Provider>
  );
};

export default CartProvider;
