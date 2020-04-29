import React from "react";

import Carousel from 'react-multi-carousel';

import "./movies.css";
import 'react-multi-carousel/lib/styles.css';

const Movies = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 6,
            slidesToSlide: 6
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
            slidesToSlide: 6
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <React.Fragment>
            <h3 className="movieList-title">Lista de Filmes</h3>
            <Carousel responsive={responsive} className="mt-3">
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://www.mauvais-genres.com/26247/avengers-endgame-original-movie-poster-15x21-in-2019-anthony-russo-robert-downey-jr.jpg"
                    alt="First slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg"
                    alt="Second slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
                    alt="Third slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://cdn.europosters.eu/image/750/posters/rush-movie-poster-i18511.jpg"
                    alt="n slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://www.reproduction-gallery.com/catalogue/uploads/1155203530_large-image_star-wars-movie-poster-lg.jpg?is_thumbnail=yes"
                    alt="n slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://www.joblo.com/assets/images/joblo/posters/2020/03/2EF9FAE7-B888-4DBA-868D-B4E289BAE769.jpeg"
                    alt="n slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://maxcdn.icons8.com/app/uploads/2019/05/poster-for-movie.png"
                    alt="n slide"
                /></div>
                <div className="text-center"><img
                    className="movieList-img"
                    src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2?imbypass=on"
                    alt="n slide"
                /></div>
            </Carousel>
        </React.Fragment>
    )
        ;
};

export default Movies;
