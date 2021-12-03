import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fallback from "./Components/Fallback/Fallback";
import React from "react";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import CartPage from "./Components/Cart/Cart";
import SignUp from "./Components/Signup/Signup";
import Contact from "./Components/Contact/Contact";

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
          <Route exact path="*">
            <Fallback />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
