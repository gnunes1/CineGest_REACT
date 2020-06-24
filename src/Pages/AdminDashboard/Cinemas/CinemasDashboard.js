import React, {useEffect, useState} from 'react';

import {Button, Col, Container, Row} from "react-bootstrap";
import CinemasDashboardTable from "./CinemasDashboardTable";
import CreateCinema from "./Forms/CreateCinema";
import CGNavbar from "../../../Components/Navbar/CGNavbar";
import axios from "axios";

import "./cinemasDashboard.css";

const CinemasDashboard = () => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState([]);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/cinemas",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {

            });
    };

    useEffect(updateTable, []);


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
                    <CreateCinema show={modalShow} onHide={() => setModalShow(false)} onSubmit={() => updateTable()}/>
                </Row>

                <div className="mx-5 mt-3" id="cinemasDashboardTable">
                    <CinemasDashboardTable data={data} setData={setData}/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default CinemasDashboard;