import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import WelcomePage from "./Pages/Welcome/Welcome";
import MoviePage from "./Pages/Movie/Movie";
import CGFooter from "./Pages/Footer";
import CGNavbar from "./Components/Navbar/CGNavbar";

const App = () => {
    return (
        <Router>
            <CGNavbar/>
            <Main/>
            <Footer/>
        </Router>
    );
};

export default App;

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact={true} component={WelcomePage}/>
                <Route path="/movie/:movieId" exact={true} component={MoviePage}/>
                <Redirect to="/"/>
            </Switch>
        </main>
    );
};

const Footer = () => {
    return <CGFooter/>;
};
