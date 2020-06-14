import React from "react";

import Banner from "./Banner";
import Movies from "./Movies";
import Highlights from "./Components/Highlights";
import CGFooter from "../Footer/Footer";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes";
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

const userButtons = (
    <React.Fragment>
        <Button variant="outline-warning" as={Link} to={ROUTES.Signup}>Registar</Button>
        <Button variant="outline-light ml-3" as={Link} to={ROUTES.Login}>INICIAR SESSÃO</Button>
    </React.Fragment>
);