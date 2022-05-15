import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PlayerDetailProvider } from './ContextFiles/PlayerDetailContext';
import Game from "./Components/Game/Game.js";
import Home from "./Components/Home/Home.js";
import About from "./Components/Shared/About.js";

function App() {

  return (<PlayerDetailProvider>
    <Router>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/game" exact>
        <Game/>
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
    </Router>
  </PlayerDetailProvider>
  );
}

export default App;
