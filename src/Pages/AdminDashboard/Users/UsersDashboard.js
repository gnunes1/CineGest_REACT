import React from 'react';

import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import CGNavbar from "../../../Components/Navbar/CGNavbar";
import UsersDashboardTable from "./UsersDashboardTable";
import CreateUser from "./Forms/CreateUser";
import {ROUTES} from "../../../routes";
import {Link} from "react-router-dom";

import "./usersDashboard.css";

const UsersDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <CGNavbar color="light" admin={adminButtons}/>
            <Container fluid className="mt-5 px-5 align">
                <Row>
                    <Col>
                        <h2>Dashboard - Utilizadores</h2>
                    </Col>
                    <Col className="text-right">
                        <Button variant="success" className="mr-5" onClick={() => setModalShow(true)}>
                            Adicionar registo
                        </Button>
                    </Col>
                    <CreateUser show={modalShow} onHide={() => setModalShow(false)}/>
                </Row>

                <div className="mx-5 mt-3" id="usersDashboardTable">
                    <UsersDashboardTable/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default UsersDashboard;

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
