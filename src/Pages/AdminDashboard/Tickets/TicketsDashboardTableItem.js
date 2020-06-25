import React from 'react';
import {Button} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";
import DeleteTicket from "./Forms/DeleteTicket";
import axios from "axios";

const TicketsDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/tickets",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.setData(response.data);
            })
            .catch(function (error) {
            });
    }

    function toLocalDate(date) {
        let d = new Date(date);
        d.setMinutes(d.getMinutes() + (-2 * d.getTimezoneOffset()));
        d = new Date(d).toISOString().split(".")[0].replace("T", " ");
        return d.substring(0, d.length - 3)
    }

    return (
        <React.Fragment>
            <tr>
                <td className="text-center">{props.email}</td>
                <td className="text-center">{props.cinema}</td>
                <td className="text-center">{props.city}</td>
                <td className="text-center">{props.location}</td>
                <td className="text-center">{props.movie}</td>
                <td className="text-center">{props.seat}</td>
                <td className="text-center">{toLocalDate(props.start)}</td>
                <td className="text-center">{toLocalDate(props.end)}</td>
                <td className="text-center">
                    <Button variant="link" onClick={() => setModalDeleteShow(true)}>
                        <Trash/>
                    </Button>
                </td>
            </tr>
            {modalDeleteShow &&
            <DeleteTicket show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}
                          onSubmit={() => updateTable()}/>}
        </React.Fragment>
    );
}
export default TicketsDashboardTableItem;