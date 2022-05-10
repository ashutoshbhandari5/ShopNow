import React from "react";
import classes from "./styles/firstPage.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.Container}>
        <div className={classes.foot}>
          <p>Copyright &copy; Proshop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
