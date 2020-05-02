import React from "react";

import "./movies.css";
import "react-multi-carousel/lib/styles.css";
import MovieList from "./Components/MovieList";

const Movies = () => {

    return (
        <React.Fragment>
            <h3 className="movieList-title">Lista de Filmes</h3>

            <MovieList/>
            
        </React.Fragment>
    );
};

export default Movies;
