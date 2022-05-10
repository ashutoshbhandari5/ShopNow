import React from "react";
import LoginScreen from "../LoginScreen/loginScreen";

const LoginPage = ({ location, history }) => {
  return (
    <div>
      <LoginScreen loc={location.search} history={history} />
    </div>
  );
};

export default LoginPage;
