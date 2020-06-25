import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Col, Container, Row,} from "react-bootstrap";
import MovieTable from "./Components/MovieTable";
import MovieData from "./Components/MovieData";
import CGNavbar from "../../Components/Navbar/CGNavbar";
import axios from "axios";
import {useForm} from "react-hook-form";

import "./movie.css"

const Movie = () => {
    const movieId = useParams().movieId;
    const {handleSubmit, register} = useForm();
    const [data, setData] = useState([])
    const [tableData, setTableData] = useState([])
    const [ticket, setTicket] = useState()

    let formData = new FormData();
    formData.append("Movie", movieId)

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies/" + movieId)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
            });
        axios.post(process.env.REACT_APP_API_URL + "/api/sessions/movie", formData)
            .then(function (response) {
                setTableData(response.data);
            })
            .catch(function (error) {

            });
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
                alert("Bilhete comprado.");
                updateTable();
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    alert("Erro inesperado.");
                } else {
                    alert(error.response.data);
                }
            });

    }

    return (
        <React.Fragment>
            <CGNavbar/>
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