import React from "react";
import classes from "./updateScreen.module.css";
import Header from "../components/FirstPage/Header";
import Footer from "../components/FirstPage/Footer";
import UpdateForm from "./updateForm";
import MyOrder from "./myOrder";

const updateScreen = ({ history }) => {
  return (
    <>
      <Header />
      <div className={classes.Container}>
        <div className={classes.form__order}>
          <UpdateForm history={history} />
          <MyOrder />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default updateScreen;
