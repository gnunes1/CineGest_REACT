import React from "react";

import Carousel from 'react-multi-carousel';

import "./welcome.css";
import 'react-multi-carousel/lib/styles.css';
import Banner from "./Banner";
import Movies from "./Movies";
import {Link} from "react-router-dom";

const WelcomePage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };
    return (

        <React.Fragment>
            <h3 className="title-carousel mt-4 text-center">EM DESTAQUE</h3>
            <br/>
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true}
                      removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}>
                <div className="text-center">
                    <Link>
                        <img
                            className="carousel-img"
                            src="https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg"
                            alt="First slide"
                        />
                    </Link>
                    <h5 className="text-warning mt-3">Disponível de 01-01-20 a 31-12-20</h5>
                </div>
                <div className="text-center">
                    <Link>
                        <img
                            className="carousel-img"
                            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
                            alt="First slide"
                        />
                    </Link>
                    <h5 className="text-warning mt-3">Disponível de 05-05-20 a 31-12-20</h5>
                </div>
                <div className="text-center">
                    <Link>
                        <img
                            className="carousel-img"
                            src="https://www.reproduction-gallery.com/catalogue/uploads/1155203530_large-image_star-wars-movie-poster-lg.jpg?is_thumbnail=yes"
                            alt="First slide"
                        />
                    </Link>
                    <h5 className="text-warning mt-3">Disponível de 30-10-20 a 31-12-20</h5>
                </div>
            </Carousel>

            <Banner/>
            <Movies/>
        </React.Fragment>
    );
};

export default WelcomePage;
