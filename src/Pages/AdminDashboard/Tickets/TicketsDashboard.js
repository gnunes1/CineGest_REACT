import React from 'react';

import {Col, Container, Row} from "react-bootstrap";
import TicketsDashboardTable from "./TicketsDashboardTable";
import CGNavbar from "../../../Components/Navbar/CGNavbar";

import "./ticketsDashboard.css";

const TicketsDashboard = () => {
    return (
        <React.Fragment>
            <CGNavbar/>
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