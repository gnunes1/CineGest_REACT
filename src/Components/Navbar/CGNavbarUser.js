import React from "react";
import {Link, useHistory} from "react-router-dom";
import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ROUTES} from "../../routes";
import axios from "axios";

import "./cgNavbar.css";
import {useRecoilState} from "recoil";
import UserStore from "../../Stores/User";

const CGNavbarUser = (props) => {
    const history = useHistory();
    const [userStore, setUserStore] = useRecoilState(UserStore);

    const logout = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/users/logout",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                localStorage.removeItem("token")
                setUserStore({name: null, role: "noUser", avatar: null});
                history.push(ROUTES.Welcome)
            })
            .catch(function (error) {
            });
    }

    return <Navbar bg="dark" variant="dark" className="justify-content-between" expand="lg" sticky="top">
        <Navbar.Brand>
            <Link to={ROUTES.Welcome} className="text-decoration-none">
                CineGest
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to={ROUTES.Tickets} className="text-decoration-none">Os meus
                    bilhetes</Nav.Link>
            </Nav>
            <Image className="avatar" src={props.avatar} roundedCircle/>

            <NavDropdown alignRight title={props.name} id="dropdownUser">
                <NavDropdown.Item eventKey="1" onSelect={() => history.push(ROUTES.Settings)}>
                    Definições
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item eventKey="2" onSelect={() => logout()}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
    </Navbar>
};

export default CGNavbarUser;
