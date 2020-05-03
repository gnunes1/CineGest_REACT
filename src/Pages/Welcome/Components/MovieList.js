import React, {useEffect, useState} from 'react';

import MovieItem from "./MovieItem";
import CGCarousel from "../../../Components/CGCarousel.js";

const MovieList = React.memo(() => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(list)
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
                    <MovieItem
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

export default MovieList;

const list = [
    {
        id: "1",
        title: "a",
        src: "https://www.mauvais-genres.com/26247/avengers-endgame-original-movie-poster-15x21-in-2019-anthony-russo-robert-downey-jr.jpg",
        alt: "a"
    },
    {
        id: "2",
        title: "b",
        src: "https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg",
        alt: "b"
    },
    {
        id: "3",
        title: "c",
        src: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on",
        alt: "c"
    },
    {
        id: "4",
        title: "d",
        src: "https://cdn.europosters.eu/image/750/posters/rush-movie-poster-i18511.jpg",
        alt: "d"
    },
    {
        id: "5",
        title: "e",
        src: "https://www.reproduction-gallery.com/catalogue/uploads/1155203530_large-image_star-wars-movie-poster-lg.jpg?is_thumbnail=yes",
        alt: "e"
    },
    {
        id: "6",
        title: "f",
        src: "https://www.joblo.com/assets/images/joblo/posters/2020/03/2EF9FAE7-B888-4DBA-868D-B4E289BAE769.jpeg",
        alt: "f"
    },
    {
        id: "7",
        title: "g",
        src: "https://maxcdn.icons8.com/app/uploads/2019/05/poster-for-movie.png",
        alt: "g"
    },
    {
        id: "8",
        title: "h",
        src: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2?imbypass=on",
        alt: "h"
    }
];

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