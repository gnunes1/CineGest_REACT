import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";
import DeleteTicket from "./Forms/DeleteTicket";
import axios from "axios";

const TicketsDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    const [data, setData] = useState([]);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/tickets/" + props.id,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
            });
    }

    return (
        <React.Fragment>
            <tr>
                <td className="text-center">{data.email}</td>
                <td className="text-center text-break">{data.seat}</td>
                <td className="text-center text-break">{data.movie}</td>
                <td className="text-center">{data.timeStart}</td>
                <td className="text-center">{data.dateStart}</td>
                <td className="text-center">{data.dateEnd}</td>
                <td className="text-center">
                    <Button variant="link" onClick={() => setModalDeleteShow(true)}>
                        <Trash/>
                    </Button>
                </td>
            </tr>
            {modalDeleteShow &&
            <DeleteTicket show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={data.id}
                          onSubmit={() => updateTable()}/>}
        </React.Fragment>
    );
}
export default TicketsDashboardTableItem;