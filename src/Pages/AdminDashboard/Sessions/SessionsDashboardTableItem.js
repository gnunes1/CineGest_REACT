import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {Trash} from "react-bootstrap-icons";
import axios from "axios";
import DeleteSession from "./Forms/DeleteSession";


const SessionsDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalDeleteSessionShow, setModalDeleteSessionShow] = useState(false);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/sessions",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.setData(response.data);
            })
            .catch(function (error) {
            });
    }

    return (
        <React.Fragment>
            <tr>
                <td className="text-center">{props.cinema}</td>
                <td className="text-center">{props.movie}</td>
                <td className="text-center">{props.start.toString().replace("T", " ")}</td>
                <td className="text-center">{props.end.toString().replace("T", " ")}</td>
                <td className="text-center">
                    <Button variant="link" onClick={() => setModalDeleteSessionShow(true)}>
                        <Trash/>
                    </Button>
                </td>
            </tr>
            {modalDeleteSessionShow &&
            <DeleteSession show={modalDeleteSessionShow} onHide={() => {
                setModalDeleteSessionShow(false);
                updateTable()
            }} id={props.id} start={props.start} end={props.end} cinema={props.cinema} movie={props.movie}/>}
        </React.Fragment>
    );
}
export default SessionsDashboardTableItem;