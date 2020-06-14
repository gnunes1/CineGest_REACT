import React from 'react';

import {Button, Col, Container, Row} from "react-bootstrap";
import UsersDashboardTable from "./UsersDashboardTable";
import CreateUser from "./Forms/CreateUser";
import CGNavbar from "../../../Components/Navbar/CGNavbar";

import "./usersDashboard.css";

const UsersDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <CGNavbar/>
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