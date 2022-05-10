import React from "react";
import { Alert } from "@material-ui/lab";

const Message = ({ severity, children, messageHeight = "30px" }) => {
  return <Alert severity={severity}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
