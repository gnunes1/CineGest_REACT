import React from "react";
import Carousel from "react-multi-carousel";

const CGCarousel = (props) => {
    return (
        <Carousel
            className="mt-3"
            responsive={props.responsive}
            infinite={props.infinite}
            autoPlay={props.autoPlay}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={props.removeArrowOnDeviceType}
            draggable={props.draggable}
        >
            {props.children}
        </Carousel>
    );
};

export default CGCarousel;
