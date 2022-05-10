import React from "react";
import classes from "./registerScreen.module.css";

const errorMessage = ({ children }) => {
  return <div className={classes.error_message}>{children}</div>;
};

export default errorMessage;
{
}
