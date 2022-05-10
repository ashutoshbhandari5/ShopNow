//CreateStore is to create redux store for our products
//ComnineReducers is used for using reducers and applyMiddleware  is use to use middleware like thunk
//th
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducers,
  singleProductReducer,
} from "./reducers/productReducers";
import { cartItemReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  registerUserReducer,
  getUserReducer,
  userUpdateReducer,
  getAllUserReducer,
} from "./reducers/loginReducer";
const reducer = combineReducers({
  productList: productReducers,
  productDetails: singleProductReducer,
  cart: cartItemReducer,
  userLogin: userLoginReducer,
  userRegister: registerUserReducer,
  loginUser: getUserReducer,
  updatedUserInfo: userUpdateReducer,
  usersForAdmin: getAllUserReducer,
});

const cartItemsFromLocalStore = localStorage.getItem("CartItems")
  ? JSON.parse(localStorage.getItem("CartItems"))
  : [];

const userInfoFromLoacalStore = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromLocalStore },
  userLogin: { userInfo: userInfoFromLoacalStore },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
