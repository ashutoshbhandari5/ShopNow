import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/LoginPage";
import CartScreen from "./pages/CartScreen";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import UpdateScreenPage from "./pages/UpdateScreenPage";
import UserAdminScreen from "./pages/UserAdminScreen";
import AdminDashboard from "./pages/AdminDashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" component={Login} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/profile" component={UpdateScreenPage} />
        <Route path="/users" component={UserAdminScreen} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/adminDashboard" component={AdminDashboard} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
