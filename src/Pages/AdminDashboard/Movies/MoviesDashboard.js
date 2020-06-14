import React, {useEffect, useState} from 'react';

import {Button, Col, Container, Row} from "react-bootstrap";
import MoviesDashboardTable from "./MoviesDashboardTable";
import CreateMovie from "./Forms/CreateMovie";
import CGNavbar from "../../../Components/Navbar/CGNavbar";

import "./moviesDashboard.css";
import axios from "axios";

const MoviesDashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState([]);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies")
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    useEffect(updateTable, []);

    return (
        <React.Fragment>
            <CGNavbar/>
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
                    <CreateMovie show={modalShow} onHide={() => {
                        setModalShow(false);
                        updateTable()
                    }}/>
                </Row>

                <div className="mx-5 mt-3" id="moviesDashboardTable">
                    <MoviesDashboardTable data={data}/>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default MoviesDashboard;