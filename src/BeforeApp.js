import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Login from "./login";
import About from "./Components/About";
function BeforeApp() {
  const [player, setplayer] = useState(["", ""]);
  console.log(player);
  return (
    <Router>
      <Route path="/home">
        <Home playername={setplayer} />
      </Route>
      <Route path="/game">
        <App player={player} />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default BeforeApp;
