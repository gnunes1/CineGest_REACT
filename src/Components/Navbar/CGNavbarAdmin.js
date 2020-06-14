import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {ROUTES} from "../../routes";

import "./cgNavbar.css";

const CGNavbarAdmin = (props) => {

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
                    <Nav.Link as={Link} to={ROUTES.UsersDashboard} className="text-decoration-none">Utilizadores</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.TicketsDashboard} className="text-decoration-none">Bilhetes</Nav.Link>
                    <Nav.Link as={Link} to={ROUTES.Tickets} className="text-decoration-none">Os meus bilhetes</Nav.Link>
                </Nav>
                <div className="ml-auto">
                    {props.name}{" "}{"logoutbutton"}
                </div>
            </Navbar.Collapse>
        </Navbar>
    }
;

export default CGNavbarAdmin;
