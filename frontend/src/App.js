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

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/category"></Route>
          <Route path="*">
            <Fallback />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
