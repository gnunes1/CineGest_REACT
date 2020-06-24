import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../routes";

import "./HighLightItem.css"

const HighlightItem = (props) => { //retorna um filme para inserir no slide dos filmes em destaque
    return (
        <div className="text-center">
            <Link to={ROUTES.Movie(props.id)}>
                <img
                    className="carousel-img"
                    src={props.poster}
                    alt={props.alt}
                    title={props.name}
                />
            </Link>
            {props.min && props.max && <h5 className="text-warning mt-3">Disponível de {props.min} a {props.max}</h5>}
            {/*{!props.min && !props.max && <h5 className="text-warning mt-3">Disponível</h5>}*/}
        </div>
    );
}
export default HighlightItem;