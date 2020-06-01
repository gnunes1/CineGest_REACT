import React from 'react';

import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import CGNavbar from "../../../Components/Navbar/CGNavbar";
import MoviesDashboardTable from "./MoviesDashboardTable";
import CreateMovie from "./Forms/CreateMovie";
import {ROUTES} from "../../../routes";

import "./moviesDashboard.css";
import {Link} from "react-router-dom";

const MoviesDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <CGNavbar color="light" admin={adminButtons}/>
            <Container fluid className="mt-5 px-5 align">
                <Row>
                    <Col>
                        <h2>Dashboard - Filmes</h2>
                    </Col>
                    <Col className="text-right">
                        <Button variant="success" className="mr-5" onClick={() => setModalShow(true)}>
                            Adicionar registo
                        </Button>
                    </Col>
                    <CreateMovie show={modalShow} onHide={() => setModalShow(false)}/>
                </Row>

                <div className="mx-5 mt-3" id="moviesDashboardTable">
                    <MoviesDashboardTable/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default MoviesDashboard;

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
