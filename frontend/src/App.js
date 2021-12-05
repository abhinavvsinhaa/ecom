import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fallback from "./Components/Fallback/Fallback";
import React from "react";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import CartPage from "./Components/Cart/Cart";
import SignUp from "./Components/Signup/Signup";
import Contact from "./Components/Contact/Contact";
import Product from "./Components/Product/Product";
import Account from "./Components/Account/Account";
import TrackOrder from "./Components/Account/TrackOrder";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/category/:id">
            <Product />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/orders/:id">
            <TrackOrder />
          </Route>
          <Route exact path="*">
            <Fallback />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
