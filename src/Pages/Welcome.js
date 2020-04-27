import React from "react";

import { Carousel } from "react-bootstrap";

import "../welcome.css";

const WelcomePage = () => {
  return (
    <>
      <h3>{"EM DESTAQUE"}</h3>
      <br />
      <Carousel style={{ backgroundColor: "#000000" }}>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3 className="carousel-text">First slide label</h3>
          <p className="carousel-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3 className="carousel-text">First slide label</h3>
          <p className="carousel-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.reproduction-gallery.com/catalogue/uploads/1155203530_large-image_star-wars-movie-poster-lg.jpg?is_thumbnail=yes"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3 className="carousel-text">First slide label</h3>
          <p className="carousel-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default WelcomePage;
