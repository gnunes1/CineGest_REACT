import React from 'react';
import {Button, Row} from "react-bootstrap";

import "./movieData.css"

//Dados do filme
const MovieData = (props) => {

    const data = props.data;

    return (
        <React.Fragment>
            <Row>
                <img
                    className="movieImg"
                    src={data.poster}
                    alt={data.name}
                />
            </Row>
            <Row className="text-center">
                {localStorage.getItem("token") &&
                <Button type="submit" variant="warning" block>Comprar</Button>}
            </Row>
            <Row className="pt-4 movieData">
                <p className="font-weight-bold">Descrição:</p>
                <p className="w-100">{data.description}</p>
                <p className="font-weight-bold">Géneros:</p>
                <p className="w-100">{data.genres}</p>
                <p className="font-weight-bold">Duração:</p>
                <p className="w-100">{data.duration} min</p>
                <p className="font-weight-bold">Idade mínima:</p>
                <p className="w-100">{data.min_age}</p>
            </Row>
        </React.Fragment>
    );
};

export default MovieData;
