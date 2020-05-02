import React from "react";
import MainPage from "./components/mainPage/";
import Offer from './components/Offer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Offer" component={Offer} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
