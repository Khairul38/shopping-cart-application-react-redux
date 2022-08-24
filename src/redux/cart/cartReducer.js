import { DECREMENT, INCREMENT, REMOVE } from "./actionTypes";

const initialState = {
  cartProducts: [],
  totalItem: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    const { id, title, price, totalQuantity } = action.payload;
    const sameProduct = state.cartProducts.find((product) => product.id === id);
    if (!sameProduct) {
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            id,
            title,
            price,
            totalQuantity: totalQuantity - 1,
            quantity: 1,
          },
        ],
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + price,
      };
    } else {
      const updatedProducts = state.cartProducts.map((product) => {
        if (product.id === id) {
          return {
            id,
            title,
            price,
            totalQuantity: totalQuantity - 1,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        cartProducts: [...updatedProducts],
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + price,
      };
    }
  } else if (action.type === DECREMENT) {
    const { id, title, price } = action.payload;
    const updatedProducts = state.cartProducts.map((product) => {
      if (product.id === id) {
        return {
          id,
          title,
          price,
          totalQuantity: product.totalQuantity + 1,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    return {
      ...state,
      cartProducts: [...updatedProducts],
      totalItem: state.totalItem - 1,
      totalPrice: state.totalPrice - price,
    };
  } else if (action.type === REMOVE) {
    const { id, price, quantity } = action.payload;
    const filteredProducts = state.cartProducts.filter(
      (product) => product.id !== id
    );
    return {
      ...state,
      cartProducts: [...filteredProducts],
      totalItem: state.totalItem - quantity,
      totalPrice: state.totalPrice - price * quantity,
    };
  } else {
    return state;
  }
};

export default cartReducer;
