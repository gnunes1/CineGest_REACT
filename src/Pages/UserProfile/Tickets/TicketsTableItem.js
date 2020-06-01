import React from 'react';
import {Button} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";
import DeleteTicket from "./Forms/DeleteTicket";

const TicketsTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    return (
        <React.Fragment>
            <tr>
                <td className="text-center text-break">{props.seat}</td>
                <td className="text-center text-break">{props.movie}</td>
                <td className="text-center">{props.timeStart}</td>
                <td className="text-center">{props.dateStart}</td>
                <td className="text-center">{props.dateEnd}</td>
                <td className="text-center">
                    <Button variant="link" onClick={() => setModalDeleteShow(true)}>
                        <Trash/>
                    </Button>
                </td>
            </tr>
            {modalDeleteShow &&
            <DeleteTicket show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}/>}
        </React.Fragment>
    );
}
export default TicketsTableItem;