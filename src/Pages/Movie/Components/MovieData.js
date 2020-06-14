import React, {useEffect, useState} from 'react';
import {Button, Row} from "react-bootstrap";
import axios from "axios";

import "./movieData.css"

//Dados do filme
const MovieData = React.memo((props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies/" + props.id)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <React.Fragment>
            <Row>
                <img
                    className="movieImg"
                    src={data.image}
                    alt={data.name}
                />
            </Row>
            <Row className="text-center">
                <Button variant="warning" block>Comprar</Button>
            </Row>
            <Row className="pt-4 movieData">
                <p className="font-weight-bold">Descrição:</p>
                <p className="w-100">{data.description}</p>
                <p className="font-weight-bold">Géneros:</p>
                <p className="w-100">{data.genres}</p>
                <p className="font-weight-bold">Duração:</p>
                <p className="w-100">{data.duration} min</p>
                <p className="font-weight-bold">Idade mínima:</p>
                <p className="w-100">{data.minAge}</p>
            </Row>
        </React.Fragment>
    );
});

export default MovieData;
