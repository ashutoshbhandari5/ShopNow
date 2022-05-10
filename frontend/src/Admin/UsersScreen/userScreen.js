import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./userScreen.module.css";
import Headers from "../../components/FirstPage/Header";
import Footer from "../../components/FirstPage/Footer";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { getAllUserAction } from "../../actions/loginAction";

const UserScreen = ({ history }) => {
  const dispatch = useDispatch();

  const usersForAdmin = useSelector((state) => state.usersForAdmin);

  const { loading, allUsers, error } = usersForAdmin;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllUserAction());
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  const onEditHandler = () => {
    console.log("Edited");
  };
  const onDeleteHandler = () => {
    console.log("Deleted");
  };

  return (
    <>
      <Headers />
      <div className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message severity="warning">{error}</Message>
        ) : (
          <div className={classes.table}>
            <h2 className={classes.user__header}>USERS</h2>
            <table className={classes.user__table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allUsers?.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{el._id}</td>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td style={{ color: el.isAdmin ? "green" : "red" }}>
                        {el.isAdmin ? "Yes" : "No"}
                      </td>
                      <td>
                        <div className={classes.edit__btn}>
                          <i
                            onClick={onEditHandler}
                            style={{ cursor: "pointer" }}
                            className="fas fa-edit"
                          ></i>
                        </div>
                        <div className={classes.delete__btn}>
                          <i
                            onClick={onDeleteHandler}
                            style={{ cursor: "pointer" }}
                            className="far fa-trash-alt"
                          ></i>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserScreen;
