import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {Calendar, GearFill, Trash} from "react-bootstrap-icons";
import UpdateCinema from "./Forms/UpdateCinema";
import DeleteCinema from "./Forms/DeleteCinema";
import axios from "axios";
import SessionsDashboard from "../Sessions/SessionsDashboard";

const CinemasDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [modalSessionsShow, setModalSessionsShow] = useState(false);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/cinemas",
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
                <td className="text-center">{props.name}</td>
                <td className="text-center">{props.city}</td>
                <td className="text-center">{props.location}</td>
                <td className="text-center">{props.capacity}</td>
                <td className="text-center">
                    <Button variant="link" onClick={() => setModalSessionsShow(true)}>
                        <Calendar/>
                    </Button>
                    {" "}
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
            <UpdateCinema show={modalUpdateShow} onHide={() => setModalUpdateShow(false)} id={props.id}
                          onSubmit={() => updateTable()}/>}
            {modalDeleteShow &&
            <DeleteCinema show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}
                          onSubmit={() => updateTable()}/>}
            {modalSessionsShow &&
            <SessionsDashboard show={modalSessionsShow} onHide={() => setModalSessionsShow(false)} id={props.id}
                               nome={props.name}/>}
        </React.Fragment>
    );
}
export default CinemasDashboardTableItem;