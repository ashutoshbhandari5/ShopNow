import React from "react";
import AddProduct from "../CartScreen/AddProduct";
import Footer from "../components/FirstPage/Footer";
import Header from "../components/FirstPage/Header";
const CartScreen = () => {
  return (
    <div>
      <Header />
      <AddProduct />
      <Footer />
    </div>
  );
};

export default CartScreen;
