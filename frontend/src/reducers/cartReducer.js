import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/allConstants";

export const cartItemReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existedItem = state.cartItems.find(
        (el) => el.product === item.product
      );
      if (existedItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.product === existedItem.product ? item : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      const itemIndex = state.cartItems.findIndex(
        (el) => action.payload === el.product
      );

      if (itemIndex > -1) {
        let newCartItems;
        // if (itemIndex === 0) {
        //   newCartItems = state.cartItems.slice(1, state.cartItems.length + 1);
        // } else {
        state.cartItems.splice(itemIndex, 1);
        newCartItems = [...state.cartItems];
        // }

        return {
          ...state,
          cartItems: newCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems,
        };
      }

    default:
      return state;
  }
};
