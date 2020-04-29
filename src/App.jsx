import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import WelcomePage from "./Pages/Welcome/Welcome";
import CGFooter from "./Pages/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact={true} component={WelcomePage} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

const Footer = () => {
  return <CGFooter />;
};
