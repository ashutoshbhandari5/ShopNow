import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./item.module.css";
import Rating from "../HomeScreens/Rating";
import { listProductDetails } from "../actions/productActions";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { cartItemsAction } from "../actions/cartAction";
import { Alert } from "@material-ui/lab";
import { AlertMessage } from "./someStyle";
const Item = ({ history, id }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const [qty, setQty] = useState(1);

  const { loading, error, product: item } = productDetails;
  const [addedItem, addItem] = useState(false);

  useEffect(() => {
    dispatch(listProductDetails(id));
    setTimeout(() => {
      addItem(false);
    }, 6000);
  }, [dispatch, id, addItem, addedItem]);

  const addToCart = () => {
    addItem(true);
    dispatch(cartItemsAction(id, qty));
  };
  return (
    <>
      <div className={classes.Container}>
        <Link className={classes.btn__back} to="/">
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message />
        ) : (
          <div className={classes.product}>
            <img
              className={classes.productImage}
              src={item.image}
              alt={item.name}
            />
            <div className={classes.product__info}>
              <h3 className={classes.productTitle}>{item.name}</h3>
              <div className={classes.rating}>
                <Rating
                  value={item.rating}
                  text={`${item.numReviews} reviews`}
                />
              </div>
              <p className={classes.productPrice}>Price: ${item.price}</p>
              <div className={classes.border}></div>
              <p className={classes.productDescription}>{item.description}</p>
            </div>
            <div className={classes.addToCart}>
              <div className={classes.price}>
                <p className={classes.productPrice}>Price:</p>
                <span>${item.price}</span>
              </div>
              <div className={classes.status}>
                <p>Status:</p>
                <span>
                  {item.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </div>
              {item.countInStock > 0 && (
                <label htmlFor="qty">
                  <div className={classes.drop__down}>
                    <span>Qty</span>
                    <select
                      className={classes.select__option}
                      onChange={(e) => setQty(e.target.value)}
                      id="qty"
                    >
                      {[...Array(item.countInStock).keys()].map((el) => {
                        return (
                          <option key={el + 1} value={el + 1}>
                            {el + 1}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </label>
              )}
              <button
                type="button"
                className={classes.addToCartBtn}
                disabled={item.countInStock === 0}
                onClick={addToCart}
              >
                Add To Cart
              </button>
              <span className={classes.status}></span>
            </div>
          </div>
        )}
      </div>
      {addedItem === true ? (
        <AlertMessage show={addedItem}>
          <Alert severity="info">Item added successfully</Alert>
        </AlertMessage>
      ) : null}
    </>
  );
};

export default Item;
