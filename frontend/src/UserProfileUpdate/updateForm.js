import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import classes from "./updateScreen.module.css";
import { getUserAction, userUpdateAction } from "../actions/loginAction";

const UpdateForm = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const updatedUserInfo = useSelector((state) => state.updatedUserInfo);

  const { success } = updatedUserInfo;

  const loginUser = useSelector((state) => state.loginUser);

  const { loading, currentUser, error } = loginUser;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage(`Password didn't match`);
    } else {
      dispatch(userUpdateAction({ id: userInfo._id, name, email, password }));
    }
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!currentUser) {
        dispatch(getUserAction("profile"));
      } else {
        setName(currentUser.name);
        setEmail(currentUser.email);
      }
    }
  }, [userInfo, history, dispatch, currentUser]);
  return (
    <div className={classes.updateForm}>
      <h2>User Profile</h2>
      {loading ? <Loader /> : null}
      {error ? <Message severity={"warning"}>Cannot find User</Message> : null}
      {errorMessage ? (
        <Message severity={"warning"}>{errorMessage}</Message>
      ) : null}
      {success ? <Message severity={"success"}>User Updated</Message> : null}
      <form className={classes.myform} onSubmit={submitHandler}>
        <div className={classes.form__input}>
          <label className={classes.label}>Name</label>
          <input
            type="name"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className={classes.form__input}>
          <label className={classes.label} htmlFor="name">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={classes.form__input}>
          <label className={classes.label} htmlFor="name">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className={classes.form__input}>
          <label className={classes.label} htmlFor="name">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          />
        </div>
        <button type="submit" className={classes.btn}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
