import React from "react";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import {ROUTES} from "../../routes";

import "./cgNavbar.css";

const CGNavbarLoading = () => {

    return <Navbar bg="dark" variant="dark" className="justify-content-between" expand="lg" sticky="top">
        <Navbar.Brand>
            <Link to={ROUTES.Welcome} className="text-decoration-none">
                CineGest
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    </Navbar>
};

export default CGNavbarLoading;
