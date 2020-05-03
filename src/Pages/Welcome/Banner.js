import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'

import './banner.css'

function Banner() {
    return (
        <Row className="text-center mx-0">
            <Col className="mt-4" md={4}>
                <Container className="banner">
                    <h2>Compre aqui o seu bilhete para assistir no nosso cinema local</h2>
                </Container>
            </Col>
            <Col className="banner-border mt-4" md={4}>
                <Container className="banner">
                    <h2>Todos os filmes recentes perto de sí</h2>
                    <Button className="mt-2" variant="warning" size="lg">
                        Inscreva-se
                    </Button>
                </Container>
            </Col>
            <Col className="mt-4">
                <Container className="banner">
                    <h2 className="mt-2">As estreias mais recentes</h2>
                </Container>
            </Col>
        </Row>
    )
}

export default Banner
