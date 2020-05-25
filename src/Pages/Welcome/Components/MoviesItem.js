import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../routes";

const MoviesItem = (props) => { //retorna um filme para inserir no slide dos filmes

    return (
        <div className="text-center">
            <Link to={ROUTES.Movie(props.id)}>
                <img
                    className="movieList-img"
                    src={props.src}
                    alt={props.alt}
                    title={props.title}
                />
            </Link>
        </div>
    );
}
export default MoviesItem;