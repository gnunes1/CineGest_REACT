import React, {useEffect} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";

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
import SessionsDashboard from "./Pages/AdminDashboard/Sessions/SessionsDashboard";
import {useRecoilState} from "recoil";
import axios from "axios";
import UserStore from "./Stores/User";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "./Pages/UserProfile/Settings";

const App = () => {
    const [userStore, setUserStore] = useRecoilState(UserStore);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/users/authenticated", {headers: {Token: localStorage.getItem("token")}})
            .then(function (response) {
                setUserStore({
                    name: response.data.name,
                    role: response.data.role,
                    avatar: response.data.avatar,
                });
            })
            .catch(function (error) {
                setUserStore({name: null, role: "noUser", avatar: null});
            });
    }, []);


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
                <ProtectedRoute path={ROUTES.Tickets} exact={true} component={Tickets} role={["Admin", "User"]}/>
                <ProtectedRoute path={ROUTES.Settings} exact={true} component={Settings} role={["Admin", "User"]}/>
                <ProtectedRoute path={ROUTES.CinemasDashboard} exact={true} component={CinemasDashboard}
                                role={"Admin"}/>
                <ProtectedRoute path={ROUTES.MoviesDashboard} exact={true} component={MoviesDashboard} role={"Admin"}/>
                <ProtectedRoute path={ROUTES.UsersDashboard} exact={true} component={UsersDashboard} role={"Admin"}/>
                <ProtectedRoute path={ROUTES.TicketsDashboard} exact={true} component={TicketsDashboard}
                                role={"Admin"}/>
                <ProtectedRoute path={ROUTES.SessionsDashboard} exact={true} component={SessionsDashboard}
                                role={"Admin"}/>
                <Redirect to={ROUTES.Welcome}/>
            </Switch>
        </main>
    );
};