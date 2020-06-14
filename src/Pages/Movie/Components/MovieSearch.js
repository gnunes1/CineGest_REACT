import React from 'react';
import {Col, Form} from "react-bootstrap";
import CGDatePicker from "../../../Components/CGDatePicker";

const MovieSearch = React.memo(() => { //opcoes para filtrar as sessões dos filmes
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Localização</Form.Label>
                    <Form.Control as="select">
                        <option>Todas</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Data</Form.Label>
                    <CGDatePicker todayButton={"Hoje"}/>
                </Form.Group>
            </Form.Row>
        </Form>
    );
});

export default MovieSearch;