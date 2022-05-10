import React, { useEffect,useState } from "react";
import classes from "./homeScreen.module.css";
import HomeScreenProducts from "./homeScreenProducts";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = ({ setDropdown }) => {
  const dispatch = useDispatch();

  const [value,setValue] = useState(false)

  const showValue=()=>{
    setValue(!value);
    console.log(value);
  }

  useEffect(() => {
    console.log(document.getElementById('header'));
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  return (
    <div onClick={showValue} className={classes.Container}>
      <h1 id="header" className={classes.mainTitle}>LATEST PRODUCT</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message severity="error">{error}</Message>
      ) : (
        <div className={classes.homeScreen}>
          {products.map((product, i) => {
            return <HomeScreenProducts key={i} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
