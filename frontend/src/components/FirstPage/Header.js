import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./styles/firstPage.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { userLogout } from "../../actions/loginAction";
const Header = () => {
  const dispatch = useDispatch();

  const [drop, setdrop] = useState(false);
  const [adminDrop, setAdminDrop] = useState(false);

  const setDropdown = () => {
    const currentDrop = drop;
    setdrop(!currentDrop);
  };
  const setAdminDropdown = () => {
    const currentDrop = adminDrop;
    setAdminDrop(!currentDrop);
  };

  const logout = () => {
    dispatch(userLogout());
  };

  const user = useSelector((state) => state.userLogin);

  const { userInfo } = user;

  console.log(userInfo)
  return (
    <header className={classes.head}>
      <div className={classes.Container}>
        <div className={classes.navItems}>
          <Link className={classes.link} to="/">
            <h3 className={classes.logo}>
              <span className={classes.first}>SHOP</span>NOW
            </h3>
          </Link>
          <div className={classes.linksItems}>
           {userInfo?.isAdmin === false && (<Link className={classes.cart} to="/cart">
              <ShoppingCartIcon />
              <span className={classes.hov}>Cart</span>
            </Link>)}
            <div>
              {userInfo?.isAdmin ? (
                <div className={classes.drop} onClick={setAdminDropdown}>
                  <div>
                    Admin Panel
                  </div>
                  </div>
              ) : userInfo ? (
                <div className={classes.drop} onClick={setDropdown}>
                  <div className={classes.dropdown}>
                    {userInfo.name}
                    <i
                      style={{ marginLeft: "7px" }}
                      className="fas fa-caret-down"
                    ></i>
                  </div>
                  {drop ? (
                    <div className={classes.dropList}>
                      <Link className={classes.carts} to="/profile">
                        profile
                      </Link>
                      <Link onClick={logout} className={classes.carts} to="/">
                        signout
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link className={classes.cart} to="/signIn">
                  <i className="fas fa-user"></i>
                  <span className={classes.hov}>SignIn</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
