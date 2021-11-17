import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fallback from "./Components/Fallback/Fallback";
import React from "react";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";

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
            <SignUp/>
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
