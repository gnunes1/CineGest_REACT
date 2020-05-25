import React from "react";

import Banner from "./Banner";
import Movies from "./Movies";

import "./welcome.css";
import "react-multi-carousel/lib/styles.css";
import Highlights from "./Components/Highlights";

const WelcomePage = () => { //pagina principal
    return (
        <React.Fragment>
            <h3 className="title-carousel mt-4 text-center">EM DESTAQUE</h3>

            <Highlights/>

            <Banner/>
            <Movies/>
        </React.Fragment>
    );
};

export default WelcomePage;

