import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../routes";

const HighlightItem = (props) => { //retorna um filme para inserir no sldie dos filmes em destaque

    return (
        <div className="text-center">
            <Link to={ROUTES.Movie(props.id)}>
                <img
                    className="carousel-img"
                    src={props.src}
                    alt={props.alt}
                    title={props.title}
                />
            </Link>
            <h5 className="text-warning mt-3">Disponível de {props.dateBegin} a {props.dateEnd}</h5>
        </div>
    );
}
export default HighlightItem;