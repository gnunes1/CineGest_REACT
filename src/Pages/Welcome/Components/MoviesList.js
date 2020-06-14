import React, {useEffect, useState} from 'react';

import MoviesItem from "./MoviesItem";
import CGCarousel from "../../../Components/CGCarousel.js";
import axios from "axios";

const MoviesList = React.memo(() => { //so e chamado quando necessario; popula os slides dos filmes
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies")
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }, [])


    if (data.length === 0) {
        return <React.Fragment>
            <div className="text-center align-content-center" style={{height: "30vh", display: "grid"}}>
                <h2 className="noMoviesInList">{"Sem filmes"}</h2>
            </div>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <CGCarousel responsive={responsive} autoPlay={false} draggable={false}>
                {data && data.map((item) => (
                    <MoviesItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        src={item.src}
                        alt={item.alt}
                        dateBegin={item.dateBegin}
                        dateEnd={item.dateEnd}
                    />
                ))}
            </CGCarousel>
        </React.Fragment>);
});

export default MoviesList;

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 6,
        slidesToSlide: 6,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 6,
        slidesToSlide: 6,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1,
    },
};