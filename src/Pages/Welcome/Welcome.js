import React from "react";

import Banner from "./Banner";
import Movies from "./Movies";
import Highlights from "./Components/Highlights";
import CGFooter from "../Footer/Footer";
import CGNavbar from "../../Components/Navbar/CGNavbar";
import "react-multi-carousel/lib/styles.css";

const WelcomePage = () => { //pagina principal
    return (
        <React.Fragment>
            <CGNavbar/>
            <h3 className="mt-4 text-center">EM DESTAQUE</h3>

            <Highlights/>

            <Banner/>
            <Movies/>

            <CGFooter/>
        </React.Fragment>
    );
};

export default WelcomePage;