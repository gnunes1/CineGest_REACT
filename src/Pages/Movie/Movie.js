import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Col, Container, Row,} from "react-bootstrap";
import MovieTable from "./Components/MovieTable";
import MovieData from "./Components/MovieData";
import MovieSearch from "./Components/MovieSearch";
import CGNavbar from "../../Components/Navbar/CGNavbar";
import axios from "axios";

import "./movie.css"

//pagina de cada filme e as suas sessoes
const Movie = () => {
    const movieId = useParams().movieId;

    const [data, setData] = useState([])

    useEffect(() => { //on component create
        axios.get(process.env.REACT_APP_API_URL + "/api/movies/" + movieId)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {

            });
    }, [])

    return (
        <React.Fragment>
            <CGNavbar/>
            <Container fluid className="mt-5 pl-5 movieContainer">
                <Row className="movieDetails">
                    <Col md="auto">
                        <MovieData id={movieId}/> {/*informacao do filme*/}
                    </Col>
                    <Col className="ml-3 col-9">
                        <Row>
                            <h3>HORÁRIOS - Filme {movieId}</h3>
                        </Row>
                        <Row>
                            <MovieSearch/> {/*opcoes de filtragem*/}
                        </Row>
                        <div id="movieTable">{/*tabela de sessões disponíveis*/}
                            <MovieTable/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Movie;