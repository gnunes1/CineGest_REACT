import React from "react";
import {Col, Row} from "react-bootstrap";

import "./footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <Row className="footer my-4 text-center w-50">
            <Col className="pt-3">
                <Link className="text-decoration-none" to={""}>Perguntas Frequentes</Link>
            </Col>
            <Col className="pt-3">
                <Link className="text-decoration-none" to={""}>Contactos</Link>
            </Col>
            <Col className="pt-3">
                <Link className="text-decoration-none" to={""}>Termos de utilização</Link>
            </Col>
            <Col className="py-3">
                <Link className="text-decoration-none" to={""}>Política de privacidade</Link>
            </Col>
        </Row>
    );
}

export default Footer;
