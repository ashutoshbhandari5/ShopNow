import React from "react";
import { CircularProgress } from "@material-ui/core";
const Loader = () => {
  return (
    <CircularProgress
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block",
      }}
      color="secondary"
    />
  );
};

export default Loader;
