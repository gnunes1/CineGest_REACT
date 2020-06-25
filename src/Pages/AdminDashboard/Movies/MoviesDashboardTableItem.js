import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {GearFill, InfoCircle, Trash} from "react-bootstrap-icons";
import UpdateMovie from "./Forms/UpdateMovie";
import DeleteMovie from "./Forms/DeleteMovie";
import axios from "axios";
import {ROUTES} from "../../../routes";
import {Link} from "react-router-dom";

const MoviesDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalUpdateShow, setModalUpdateShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies/details",
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
                <td className="text-center text-break">{props.description}</td>
                <td className="text-center text-break">{props.genres}</td>
                <td className="text-center">{props.duration}</td>
                <td className="text-center">{props.min_age}</td>
                <td className="text-center">
                    {props.highlighted === true && "Sim"}
                    {props.highlighted === false && "Não"}
                </td>
                <td className="text-center">
                    <Button variant="link">
                        <Link to={ROUTES.Movie(props.id)}>
                            <InfoCircle/>
                        </Link>
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
            <UpdateMovie show={modalUpdateShow} onHide={() => setModalUpdateShow(false)} id={props.id}
                         onSubmit={() => updateTable()}/>}
            {modalDeleteShow &&
            <DeleteMovie show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}
                         onSubmit={() => updateTable()}/>}
        </React.Fragment>
    );
}
export default MoviesDashboardTableItem;