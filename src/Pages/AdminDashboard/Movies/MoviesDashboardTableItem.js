import React from 'react';
import {Button} from "react-bootstrap";
import {GearFill, Trash} from "react-bootstrap-icons";
import UpdateMovie from "./Forms/UpdateMovie";
import DeleteMovie from "./Forms/DeleteMovie";

const MoviesDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalUpdateShow, setModalUpdateShow] = React.useState(false);
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);
    
    return (
        <React.Fragment>
            <tr>
                <td className="text-center">{props.name}</td>
                <td className="text-center text-break">{props.description}</td>
                <td className="text-center text-break">{props.genres}</td>
                <td className="text-center">{props.duration}</td>
                <td className="text-center">{props.min_age}</td>
                <td className="text-center">
                    {props.highlighted === true && "Sim"}
                    {props.highlighted === false && "Não"}
                </td>
                <td className="text-center">
                    <Button variant="link" onClick={() => setModalUpdateShow(true)}>
                        <GearFill/>
                    </Button>
                    {" "}
                    <Button variant="link" onClick={() => setModalDeleteShow(true)}>
                        <Trash/>
                    </Button>
                </td>
            </tr>
            {modalUpdateShow &&
            <UpdateMovie show={modalUpdateShow} onHide={() => setModalUpdateShow(false)} id={props.id}/>}
            {modalDeleteShow &&
            <DeleteMovie show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}/>}
        </React.Fragment>
    );
}
export default MoviesDashboardTableItem;