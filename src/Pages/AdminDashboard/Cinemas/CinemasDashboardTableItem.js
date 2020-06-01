import React from 'react';
import {Button} from "react-bootstrap";
import {GearFill, Trash} from "react-bootstrap-icons";
import UpdateCinema from "./Forms/UpdateCinema";
import DeleteCinema from "./Forms/DeleteCinema";

const CinemasDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalUpdateShow, setModalUpdateShow] = React.useState(false);
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    return (
        <React.Fragment>
            <tr>
                <td className="text-center">{props.name}</td>
                <td className="text-center">{props.city}</td>
                <td className="text-center">{props.location}</td>
                <td className="text-center">{props.capacity}</td>
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
            <UpdateCinema show={modalUpdateShow} onHide={() => setModalUpdateShow(false)} id={props.id}/>}
            {modalDeleteShow &&
            <DeleteCinema show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}/>}
        </React.Fragment>
    );
}
export default CinemasDashboardTableItem;