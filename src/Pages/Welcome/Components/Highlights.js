import React, {useEffect, useState} from 'react';

import HighlightItem from "./HighlightItem";
import CGCarousel from "../../../Components/CGCarousel.js";
import axios from "axios";

import "./Highlights.css"

const Highlights = React.memo(() => { //so e chamado quando necessario; popula os slides dos filmes em destaque
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        axios.get(process.env.REACT_APP_API_URL + "/api/movies/highlighted")
            .then(function (response) {
                setData(response.data);
                axios.get(process.env.REACT_APP_API_URL + "/api/sessions/highlighted")
                    .then(function (response) {
                        setData2(response.data)

                    })
                    .catch(function (error) {
                        setError(true)
                    });
            })
            .catch(function (error) {
                setError(true)
            });
    }, []);


    if (error || data.length === 0) { //não existem dados ou deu erro no fetch
        return <React.Fragment>
            <div className="text-center align-content-center" id="noHighlights">
                <h2 className="noHighlights">{"Sem filmes em destaque"}</h2>
            </div>
        </React.Fragment>
    } else { //existem dados
        data.map((item) => {
            data2.map((item2) => {
                if (item.id === item2.id) {
                    item.min = item2.min
                    item.max = item2.max
                }
            })
        })

        return (
            <React.Fragment>
                <CGCarousel responsive={responsive} infinite={true} autoPlay={true}
                            removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile",]}
                            draggable={false}>
                    {data && data.map((item) => (
                        <HighlightItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            poster={item.poster}
                            alt={item.name}
                            min={item.min}
                            max={item.max}
                        />
                    ))}
                </CGCarousel>
            </React.Fragment>
        );
    }
});

export default Highlights;

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