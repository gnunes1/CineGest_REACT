import React from 'react';
import {Form} from "react-bootstrap";

const MovieTableItem = (props) => { //retorna uma linha com os dados de uma sessão do filme indicado

    return (
        <tr>
            <td className="text-center">
                <Form.Check
                    type="radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
            </td>
            <td className="text-center">{props.cinema}</td>
            <td className="text-center">{props.localizacao}</td>
            <td className="text-center">{props.data}</td>
            <td className="text-center">{props.inicio}</td>
            <td className="text-center">{props.fim}</td>
            <td className="text-center">{props.lugares}</td>
        </tr>
    );
}
export default MovieTableItem;