import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {ROUTES} from "../../routes";

import "./cgNavbar.css";

const CGNavbar = (props) => (
        <Navbar bg={props.color} variant={props.color} className="justify-content-between" expand="lg" sticky="top">
            <Navbar.Brand>
                <Link to={ROUTES.Welcome} className="text-decoration-none">
                    CineGest
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                {props.admin}
                <div className="ml-auto">
                    {props.user}
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
;

export default CGNavbar;
