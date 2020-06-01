import React from 'react';

import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import CGNavbar from "../../../Components/Navbar/CGNavbar";
import TicketsDashboardTable from "./TicketsDashboardTable";
import {ROUTES} from "../../../routes";

import "./ticketsDashboard.css";
import {Link} from "react-router-dom";

const TicketsDashboard = () => {
    return (
        <React.Fragment>
            <CGNavbar color="light" admin={adminButtons}/>
            <Container fluid className="mt-5 px-5 align">
                <Row>
                    <Col>
                        <h2>Dashboard - Bilhetes</h2>
                    </Col>
                </Row>
                <div className="mx-5 mt-3" id="ticketsDashboardTable">
                    <TicketsDashboardTable/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default TicketsDashboard;

const adminButtons = (
    <React.Fragment>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to={ROUTES.CinemasDashboard} className="text-decoration-none">Cinemas</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.MoviesDashboard} className="text-decoration-none">Filmes</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.UsersDashboard} className="text-decoration-none">Utilizadores</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.TicketsDashboard} className="text-decoration-none">Bilhetes</Nav.Link>
        </Nav>
    </React.Fragment>
);
