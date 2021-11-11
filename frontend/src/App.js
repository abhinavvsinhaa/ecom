import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Fallback from "./Components/Fallback/Fallback";
import React from "react";
import Category from "./Components/Category/Category";

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
          <Route exact path="*">
            <Fallback />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
