import { INCREMENT, DECREMENT, REMOVE } from "./actionTypes";

export const increment = (id, title, price, totalQuantity) => {
  return {
    type: INCREMENT,
    payload: {
      id,
      title,
      price,
      totalQuantity,
    },
  };
};
export const decrement = (id, title, price) => {
  return {
    type: DECREMENT,
    payload: {
      id,
      title,
      price,
    },
  };
};
export const remove = (id, price, quantity) => {
  return {
    type: REMOVE,
    payload: {
      id,
      price,
      quantity,
    },
  };
};
