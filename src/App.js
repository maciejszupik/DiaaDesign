import React from "react";
import MainPage from "./components/mainPage/";
import Offer from './components/Offer';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Offer" component={Offer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
