import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Alert, Col, Container, Modal, Row,} from "react-bootstrap";
import MovieTable from "./Components/MovieTable";
import MovieData from "./Components/MovieData";
import CGNavbar from "../../Components/Navbar/CGNavbar";
import axios from "axios";
import {useForm} from "react-hook-form";

import "./movie.css"
import CGModal from "../../Components/CGModal";

const Movie = () => {
    const movieId = useParams().movieId;
    const {handleSubmit, register} = useForm();
    const [data, setData] = useState([])
    const [tableData, setTableData] = useState([])
    const [ticket, setTicket] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [body, setBody] = useState();

    let formData = new FormData();
    formData.append("Movie", movieId)

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies/" + movieId)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
            });
        updateTable();
    }, [])

    const updateTable = () => {
        axios.post(process.env.REACT_APP_API_URL + "/api/sessions/movie", formData)
            .then(function (response) {
                setTableData(response.data);
            })
            .catch(function (error) {

            });
    }


    const onSubmit = data => {

        let formData = new FormData();
        formData.append("Session", ticket);

        axios.post(process.env.REACT_APP_API_URL + "/api/tickets", formData,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                updateTable();
                setBody(<Alert variant={"success"}>Bilhete comprado.</Alert>)
                setModalShow(true)
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setBody(<Alert variant={"warning"}>Erro inesperado.</Alert>)
                    setModalShow(true)

                } else {
                    setBody(<Alert variant={"warning"}>{error.response.data}</Alert>)
                    setModalShow(true)
                }
            });
    }

    return (
        <React.Fragment>
            <CGNavbar/>
            <CGModal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-dark">
                        Informação
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {body}
                </Modal.Body>
            </CGModal>
            <Container fluid className="mt-4 pl-5 movieContainer">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row className="movieDetails">
                        <Col md="auto">
                            <MovieData data={data}/> {/*informacao do filme*/}
                        </Col>
                        <Col className="ml-3 col-9">
                            <Row>
                                <h3>HORÁRIOS - {data.name}</h3>
                            </Row>
                            <div id="movieTable" className="mt-3">{/*tabela de sessões disponíveis*/}
                                <MovieTable id={movieId} ticket={ticket} setTicket={setTicket} data={tableData}/>
                            </div>

                        </Col>
                    </Row>
                </form>

            </Container>
        </React.Fragment>
    );
};

export default Movie;