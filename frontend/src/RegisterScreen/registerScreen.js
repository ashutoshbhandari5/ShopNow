import React, { useEffect, useState } from "react";
// import joi from "joi";
import classes from "./registerScreen.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { userRegisterAction } from "../actions/loginAction";
import Header from "../components/FirstPage/Header";
import Footer from "../components/FirstPage/Footer";
// import ErrorMessage from "./errorMessage";

const RegisterScreen = ({ history, loc }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //when login page loads

  const dispatch = useDispatch();

  //after user event
  const user = useSelector((state) => state.userRegister);

  //after user event
  const { loading, userInfo, error } = user;

  //when user hits any events
  const submitHandler = (e) => {
    e.preventDefault();
    //Dispactch the login
    if (password === confirmPassword) {
      dispatch(userRegisterAction(name, email, password));
    } else {
      setPasswordError(`Password doesn't match`);
    }
  };

  const redirect = loc ? loc.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  return (
    <>
      <Header />
      <div className={classes.loginScreen}>
        <div className={classes.loginForm}>
          <div className={classes.title}>
            <h3>Register Now</h3>
          </div>
          {loading ? <Loader /> : null}
          {error ? (
            <Message messageHeight={"50px"} severity={"warning"}>
              {error}
            </Message>
          ) : null}
          {passwordError ? (
            <Message height={"30px"} severity={"warning"}>
              {passwordError}
            </Message>
          ) : null}
          <form onSubmit={submitHandler}>
            <div className={classes.input_Box}>
              <i className="fas fa-id-card-alt"></i>
              <input
                onChange={(e) => setname(e.currentTarget.value)}
                value={name}
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className={classes.input_Box}>
              <i className="fas fa-user-alt"></i>
              <input
                onChange={(e) => setemail(e.currentTarget.value)}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className={classes.input_Box}>
              <i className="fas fa-unlock-alt"></i>
              <input
                onChange={(e) => setpassword(e.currentTarget.value)}
                type="password"
                value={password}
                name="password"
                placeholder="Password"
              />
            </div>

            <div className={classes.input_Box}>
              <i className="fas fa-unlock-alt"></i>
              <input
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>

            <button type="submit" className={classes.form_Btn}>
              Register
            </button>
            <div className={classes.signin}>
              <span>Already a Customer? </span>
              <Link
                className={classes.register_link}
                to={redirect ? `/signIn?redirect=${redirect}` : "/signIn"}
              >
                SignIn here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterScreen;
