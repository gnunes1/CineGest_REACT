import React from "react";
import {Link, useHistory} from "react-router-dom";
import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ROUTES} from "../../routes";
import axios from "axios";
import {useRecoilState} from "recoil";
import UserStore from "../../Stores/User";

import "./cgNavbar.css";

const CGNavbarAdmin = (props) => {
    const history = useHistory();
    const [userStore, setUserStore] = useRecoilState(UserStore);

    const logout = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/users/logout",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                localStorage.removeItem("token")
                setUserStore({name: null, role: "noUser", avatar: null});
                history.push(ROUTES.Welcome)
            })
            .catch(function (error) {
            });
    }

    return <Navbar bg="light" variant="light" className="justify-content-between" expand="lg" sticky="top">
        <Navbar.Brand>
            <Link to={ROUTES.Welcome} className="text-decoration-none">
                CineGest - Admin
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to={ROUTES.CinemasDashboard} className="text-decoration-none">Cinemas</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.MoviesDashboard} className="text-decoration-none">Filmes</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.SessionsDashboard} className="text-decoration-none">Sessões</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.UsersDashboard} className="text-decoration-none">Utilizadores</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.TicketsDashboard} className="text-decoration-none">Bilhetes</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.Tickets} className="text-decoration-none">Os meus bilhetes</Nav.Link>
            </Nav>
            <Image className="avatar" src={props.avatar} roundedCircle/>
            <NavDropdown alignRight title={props.name} id="dropdownUser">
                <NavDropdown.Item eventKey="1" onSelect={() => history.push(ROUTES.Settings)}>
                    Definições
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item eventKey="2" onSelect={() => logout()}>Logout</NavDropdown.Item>
            </NavDropdown>}
        </Navbar.Collapse>
    </Navbar>
};

export default CGNavbarAdmin;
