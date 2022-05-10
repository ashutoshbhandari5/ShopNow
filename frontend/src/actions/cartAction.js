import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/allConstants";

export const cartItemsAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      product: data._id,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("CartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCartItemAction = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({ type: CART_REMOVE_ITEM, payload: data._id });

  console.log(data._id);

  localStorage.setItem("CartItems", JSON.stringify(getState().cart.cartItems));
};
