import React, {useEffect, useState} from 'react';

import HighlightItem from "./HighlightItem";
import CGCarousel from "../../../Components/CGCarousel.js";

const Highlights = React.memo(() => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(list)
    }, [])


    if (data.length === 0) {
        return <React.Fragment>
            <div className="text-center align-content-center" style={{height: "50vh", display: "grid"}}>
                <h2 className="noHighlights">{"Sem filmes em destaque"}</h2>
            </div>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <CGCarousel responsive={responsive} infinite={true} autoPlay={true}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile",]}
                        draggable={false}>
                {data && data.map((item) => (
                    <HighlightItem
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

export default Highlights;

const list = [
    {
        id: "1",
        title: "Fight Club",
        src: "https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg",
        alt: "Fight Club",
        dateBegin: "01-01-20",
        dateEnd: "31-12-20"
    },
    {
        id: "2",
        title: "Blade Runner 2049",
        src: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on",
        alt: "Blade Runner 2049",
        dateBegin: "05-05-20",
        dateEnd: "31-12-20"
    },
    {
        id: "3",
        title: "Star Wars: Episódio IV - Uma Nova Esperança",
        src: "https://www.reproduction-gallery.com/catalogue/uploads/1155203530_large-image_star-wars-movie-poster-lg.jpg?is_thumbnail=yes",
        alt: "Star Wars: Episódio IV - Uma Nova Esperança",
        dateBegin: "30-10-20",
        dateEnd: "31-12-20"
    }
];

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 1,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 1,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 1,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1,
    },
};