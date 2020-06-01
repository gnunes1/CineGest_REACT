import React from 'react';

import {Col, Container, Nav, Row} from "react-bootstrap";
import CGNavbar from "../../../Components/Navbar/CGNavbar";
import TicketsTable from "./TicketsTable";

import "./tickets.css";

const Tickets = () => {
    return (
        <React.Fragment>
            <CGNavbar color="dark"/>
            <Container fluid className="mt-5 px-5 align">
                <Row>
                    <Col>
                        <h2>Os meus bilhetes</h2>
                    </Col>
                </Row>
                <div className="mx-5 mt-3" id="ticketsTable">
                    <TicketsTable/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Tickets;