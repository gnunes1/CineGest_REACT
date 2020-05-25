import React, {useEffect, useState} from 'react';
import {Button, Row} from "react-bootstrap";

import "./movieData.css"

//Dados do filme
const MovieData = () => {
    const [data, setData] = useState([])
    useEffect(() => { //on componentUpdate
        setData(list);
    }, [])

    return (
        <React.Fragment>
            <Row>
                <img
                    className="movieImg"
                    src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg"
                    alt="a"
                />
            </Row>
            <Row className="text-center">
                <Button variant="warning" block>Comprar</Button>
            </Row>
            <Row className="pt-4 movieData">
                <p className="w-100">Descrição: Blade Runner K's discovery of a long-buried secret leads him
                    to
                    track down former
                    Blade
                    Runner Rick Deckard, who's been missing for thirty years.
                </p>
                <p className="w-100">Géneros: Ação; Drama; Mistério; Ficção científica; Suspense</p>
                <p className="w-100">Duração:</p>
                <p className="w-100">Idade mínima:</p>
            </Row>
        </React.Fragment>
    );
};

export default MovieData;

const list = [{}]