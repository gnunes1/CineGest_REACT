import React from 'react';

import {Button, Col, Container, Row} from "react-bootstrap";
import CinemasDashboardTable from "./CinemasDashboardTable";
import CreateCinema from "./Forms/CreateCinema";
import CGNavbar from "../../../Components/Navbar/CGNavbar";

import "./cinemasDashboard.css";

const CinemasDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <CGNavbar/>
            <Container fluid className="mt-5 px-5 align">
                <Row>
                    <Col>
                        <h2>Dashboard - Cinemas</h2>
                    </Col>
                    <Col className="text-right">
                        <Button variant="success" className="mr-5" onClick={() => setModalShow(true)}>
                            Adicionar registo
                        </Button>
                    </Col>
                    <CreateCinema show={modalShow} onHide={() => setModalShow(false)}/>
                </Row>

                <div className="mx-5 mt-3" id="cinemasDashboardTable">
                    <CinemasDashboardTable/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default CinemasDashboard;