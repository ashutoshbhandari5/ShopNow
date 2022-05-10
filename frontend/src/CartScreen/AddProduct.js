import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import classes from "./addProduct.module.css";
import { Link } from "react-router-dom";
import { cartItemsAction, removeCartItemAction } from "../actions/cartAction";

const AddProduct = () => {
  const dispatch = useDispatch();

  const removeFromBasket = (id) => {
    dispatch(removeCartItemAction(id));
    console.log(id);
  };

  const cart = useSelector((state) => state.cart);

  const listedItems = cart.cartItems;

  return (
    <div className={classes.Container}>
      {listedItems?.length === 0 ? (
        <Message severity={"warning"}>
          You haven't selected any items in for shopping
        </Message>
      ) : !listedItems ? (
        <Loader />
      ) : (
        <div className={classes.shop__items}>
          {listedItems.map((item, i) => {
            return (
              <div key={i} className={classes.each__item}>
                <img src={item.image} alt={item.name} />
                <Link
                  className={classes.product__link}
                  to={`/product/${item.product}`}
                >
                  {item.name}
                </Link>
                <span>${item.price}</span>
                <select
                  className={classes.drop__down}
                  onChange={(e) =>
                    dispatch(
                      cartItemsAction(item.product, e.currentTarget.value)
                    )
                  }
                  htmlFor={item.qty}
                >
                  {[...Array(item.countInStock).keys()].map((el) => {
                    return (
                      <option value={el + 1} key={el + 1}>
                        {el + 1}
                      </option>
                    );
                  })}
                </select>
                <button
                  type="button"
                  className={classes.delete__btn}
                  onClick={() => removeFromBasket(item.product)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className={classes.proceed}>
        <div className={classes.subtotal}>
          <h3>
            Subtotal (
            {listedItems.reduce((acc, curr) => acc + parseInt(curr.qty), 0)})
            Items
          </h3>
          <span>
            {listedItems
              .reduce((acc, curr) => acc + curr.price * curr.qty, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className={classes.border}></div>
        <div className={classes.btn}>
          <button
            className={classes.proceed__btn}
            disabled={listedItems.length > 0}
            type="button"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
