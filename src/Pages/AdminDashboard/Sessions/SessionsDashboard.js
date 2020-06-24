import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CreateSession from "./Forms/CreateSession";
import axios from "axios";
import CGNavbar from "../../../Components/Navbar/CGNavbar";
import SessionsDashboardTable from "./SessionsDashboardTable";

import "./sessionsDashboard.css";

const SessionsDashboard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();

    const updateTable = () => {

        axios.get(process.env.REACT_APP_API_URL + "/api/sessions",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
            });
    }

    useEffect(updateTable, []);

    return (
        <React.Fragment>
            <CGNavbar/>
            <Container fluid className="mt-5 px-5 align">
                <Row>
                    <Col>
                        <h2>Dashboard - Sessões</h2>
                    </Col>
                    <Col className="text-right">
                        <Button variant="success" className="mr-5" onClick={() => setModalShow(true)}>
                            Adicionar registo
                        </Button>
                    </Col>
                    <CreateSession show={modalShow} onHide={() => setModalShow(false)} onSubmit={() => updateTable()}/>
                </Row>
                <div className="mx-5 mt-3" id="sessionsDashboardTable">
                    <SessionsDashboardTable data={data} setData={setData}/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default SessionsDashboard;