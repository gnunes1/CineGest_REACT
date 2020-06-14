import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {ROUTES} from "../../routes";

import "./cgNavbar.css";

const CGNavbarUser = (props) => {

        return <Navbar bg="dark" variant="dark" className="justify-content-between" expand="lg" sticky="top">
            <Navbar.Brand>
                <Link to={ROUTES.Welcome} className="text-decoration-none">
                    CineGest
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={ROUTES.Tickets} className="text-decoration-none">Os meus
                        bilhetes</Nav.Link>
                </Nav>
                <div className="ml-auto">
                    {props.name}{" "}{"logoutbutton"}
                </div>
            </Navbar.Collapse>
        </Navbar>
    }
;

export default CGNavbarUser;
