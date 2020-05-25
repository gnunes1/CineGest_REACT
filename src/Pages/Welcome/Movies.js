import React from "react";

import "./movies.css";
import "react-multi-carousel/lib/styles.css";
import MoviesList from "./Components/MoviesList";

const Movies = () => { //pagina que contem as secçao dos filems em destaque

    return (
        <React.Fragment>
            <h3 className="movieList-title">Lista de Filmes</h3>

            <MoviesList/> {/*lista de filmes*/}

        </React.Fragment>
    );
};

export default Movies;
