import React from "react";
import Footer from "../components/FirstPage/Footer";
import Header from "../components/FirstPage/Header";
import Item from "../ProductScreen/Item";

const Product = ({ history, match }) => {
  return (
    <>
      <Header />
      <Item history={history} id={match.params.id} />
      <Footer />
    </>
  );
};

export default Product;
