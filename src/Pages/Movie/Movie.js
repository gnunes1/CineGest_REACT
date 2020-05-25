import React from 'react';
import {useParams} from 'react-router-dom';
import {
    Col,
    Container,
    Row,
} from "react-bootstrap";

import MovieTable from "./Components/MovieTable";
import MovieData from "./Components/MovieData";
import MovieSearch from "./Components/MovieSearch";

import "./movie.css"

//pagina de cada filme e as suas sessoes
const Movie = () => {
    const movieId = useParams().movieId;

    //chamar aqui a api com os dados do filme(nome, descricao...)

    return (
        <Container className="mt-5 movieContainer">
            <Row className="movieDetails">
                <Col md="auto">
                    <MovieData id={movieId}/> {/*informacao do filme*/}
                </Col>
                <Col md="12" className="ml-4">
                    <Row>
                        <h3>HORÁRIOS - Filme {movieId}</h3>
                    </Row>
                    <Row>
                        <MovieSearch/> {/*opcoes de filtragem*/}
                    </Row>
                    <MovieTable/> {/*tabela de sessões disponíveis*/}
                </Col>
            </Row>
        </Container>
    );
};

export default Movie;
