import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import {ROUTES} from "./routes";
import WelcomePage from "./Pages/Welcome/Welcome";
import MoviePage from "./Pages/Movie/Movie";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Tickets from "./Pages/UserProfile/Tickets/Tickets";
import CinemasDashboard from "./Pages/AdminDashboard/Cinemas/CinemasDashboard";
import MoviesDashboard from "./Pages/AdminDashboard/Movies/MoviesDashboard";
import UsersDashboard from "./Pages/AdminDashboard/Users/UsersDashboard";
import TicketsDashboard from "./Pages/AdminDashboard/Tickets/TicketsDashboard";


const App = () => {
    return (
        <Router>
            <Main/>
        </Router>
    );
};

export default App;

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path={ROUTES.Welcome} exact={true} component={WelcomePage}/>
                <Route path={ROUTES.Movie()} exact={true} component={MoviePage}/>
                <Route path={ROUTES.Login} exact={true} component={Login}/>
                <Route path={ROUTES.Signup} exact={true} component={Signup}/>
                <Route path={ROUTES.Tickets} exact={true} component={Tickets}/>
                <Route path={ROUTES.CinemasDashboard} exact={true} component={CinemasDashboard}/>
                <Route path={ROUTES.MoviesDashboard} exact={true} component={MoviesDashboard}/>
                <Route path={ROUTES.UsersDashboard} exact={true} component={UsersDashboard}/>
                <Route path={ROUTES.TicketsDashboard} exact={true} component={TicketsDashboard}/>
                <Redirect to={ROUTES.Welcome}/>
            </Switch>
        </main>
    );
};