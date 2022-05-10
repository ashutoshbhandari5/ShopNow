import React, { useEffect, useState } from "react";
import classes from "./loginScreen.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { loginUser } from "../actions/loginAction";
import Header from "../components/FirstPage/Header";
import Footer from "../components/FirstPage/Footer";

const LoginScreen = ({ loc, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //when login page loads

  const dispatch = useDispatch();

  //after user event
  const user = useSelector((state) => state.userLogin);

  //after user event
  const { loading, userInfo, error } = user;

  //when user hits any events
  const submitHandler = (e) => {
    e.preventDefault();
    //Dispactch the login
    dispatch(loginUser(email, password));
  };
  let redirect = loc ? loc.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      if(userInfo.isAdmin){
       history.push('/adminDashboard')
      }else{
        history.push('/')
      }
    }
  }, [userInfo, history, redirect]);

  return (
    <>
      <Header />
      <div className={classes.loginScreen}>
        <div className={classes.loginForm}>
          <div className={classes.title}>
            <h3>Login</h3>
          </div>
          {loading ? <Loader /> : null}
          {error ? <Message severity={"warning"}>{error}</Message> : null}
          <form onSubmit={submitHandler}>
            <div className={classes.input_Box}>
              <i className="fas fa-user-alt"></i>
              <input
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={classes.input_Box}>
              <i className="fas fa-unlock-alt"></i>
              <input
                onChange={(e) => setPassword(e.currentTarget.value)}
                type="password"
                value={password}
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className={classes.form_Btn}>
              Login
            </button>
            <div className={classes.signup}>
              <span>New Customer? </span>
              <Link
                className={classes.register_link}
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginScreen;
