import React, {useEffect, useState} from 'react';
import {Button, Row} from "react-bootstrap";

import "./movieData.css"

//Dados do filme
const MovieData = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => { //on create
        setData(props);
    }, [])

    return (
        <React.Fragment>
            <Row>
                <img
                    className="movieImg"
                    src={props.image}
                    alt={props.name}
                />
            </Row>
            <Row className="text-center">
                <Button variant="warning" block>Comprar</Button>
            </Row>
            <Row className="pt-4 movieData">
                <p className="font-weight-bold">Descrição:</p>
                <p className="w-100">{props.description}</p>
                <p className="font-weight-bold">Géneros:</p>
                <p className="w-100">{props.genres}</p>
                <p className="font-weight-bold">Duração:</p>
                <p className="w-100">{props.duration} min</p>
                <p className="font-weight-bold">Idade mínima:</p>
                <p className="w-100">{props.minAge}</p>
            </Row>
        </React.Fragment>
    );
};

export default MovieData;
