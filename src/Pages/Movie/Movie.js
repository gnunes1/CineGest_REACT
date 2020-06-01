import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {
    Button,
    Col,
    Container,
    Row,
} from "react-bootstrap";

import MovieTable from "./Components/MovieTable";
import MovieData from "./Components/MovieData";
import MovieSearch from "./Components/MovieSearch";
import CGNavbar from "../../Components/Navbar/CGNavbar";
import {ROUTES} from "../../routes";

import "./movie.css"

//pagina de cada filme e as suas sessoes
const Movie = React.memo(() => {
    const movieId = useParams().movieId;

    const [data, setData] = useState([])
    useEffect(() => { //on component create
        setData(list);
    }, [])

    return (
        <React.Fragment>
            <CGNavbar user={userButtons} color="dark"/>
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
                            <MovieTable movie={""}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
});

export default Movie;

const userButtons = (
    <React.Fragment>
        <Button variant="outline-warning" as={Link} to={ROUTES.Signup}>Registar</Button>
        <Button variant="outline-light ml-3" as={Link} to={ROUTES.Login}>INICIAR SESSÃO</Button>
    </React.Fragment>
);

const list = [{
    name: "Blade Runner 2049",
    image: "",
    description: "Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    genres: "Ação; Drama; Mistério; Ficção científica; Suspense",
    duration: "92",
    minAge: "18"
}]