import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

import "./banner.css";

function Banner() {
    return (
        <Row className="banner">
            <Col className="mt-4" md={4}>
                <Container className="banner">
                    <h2>Compre aqui o seu bilhete para assistir no nosso cinema local</h2>
                </Container>
            </Col>
            <Col className="banner-border mt-4" md={4}>
                <Container className="banner">
                    <h2>Todos os filmes recentes próximos de sí</h2>
                    <Button className="mt-2" variant="warning" size="lg">
                        Inscreva-se
                    </Button>
                </Container>
            </Col>
            <Col className="mt-4">
                <Container className="banner">
                    <h2>Fluid jumbotron</h2>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal
                        space of its parent.
                    </p>
                </Container>
            </Col>
        </Row>
    );
}

export default Banner;
