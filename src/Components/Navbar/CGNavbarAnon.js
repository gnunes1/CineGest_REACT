import React from "react";
import {Link} from "react-router-dom";
import {Button, Navbar} from "react-bootstrap";
import {ROUTES} from "../../routes";

import "./cgNavbar.css";

const CGNavbarAnon = () => {

    return <Navbar bg="dark" variant="dark" className="justify-content-between" expand="lg" sticky="top">
        <Navbar.Brand>
            <Link to={ROUTES.Welcome} className="text-decoration-none">
                CineGest
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
            <div className="ml-auto">
                <Button variant="outline-warning" as={Link} to={ROUTES.Signup}>Registar</Button>
                <Button variant="outline-light ml-3" as={Link} to={ROUTES.Login}>INICIAR SESSÃO</Button>
            </div>
        </Navbar.Collapse>
    </Navbar>
};

export default CGNavbarAnon;
