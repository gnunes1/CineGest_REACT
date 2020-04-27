import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import WelcomePage from "./Pages/Welcome";
import CGFooter from "./Pages/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { MoviesListRoute } from "./routes";
import Movies from "./Pages/Movies";

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
        <Route path={MoviesListRoute} exact={true} component={Movies} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

const Footer = () => {
  return <CGFooter />;
};
