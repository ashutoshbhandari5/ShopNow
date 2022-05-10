import React from "react";
import { Link } from "react-router-dom";
import classes from "./homeScreen.module.css";
import Rating from "./Rating";

const product = ({ product }) => {
  return (
    <div className={classes.eachProduct}>
      <Link className={classes.link} to={`/product/${product._id}`}>
        <img
          className={classes.productImage}
          src={product.image}
          alt={product.name}
        />
      </Link>
      <Link className={classes.link} to={`/product/${product._id}`}>
        <p className={classes.productTitle}>{product.name}</p>
      </Link>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <h3 className={classes.productPrice}>${product.price}</h3>
    </div>
  );
};

export default product;
