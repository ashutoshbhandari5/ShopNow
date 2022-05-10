import React from "react";
import RegisterScreen from "../RegisterScreen/registerScreen";

const RegisterUser = ({ history, location }) => {
  return (
    <div>
      <RegisterScreen history={history} loc={location.search} />
    </div>
  );
};

export default RegisterUser;
