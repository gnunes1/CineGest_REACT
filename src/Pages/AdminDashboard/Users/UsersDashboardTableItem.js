import React from 'react';
import {Button} from "react-bootstrap";
import {GearFill, Trash} from "react-bootstrap-icons";
import UpdateUser from "./Forms/UpdateUser";
import DeleteUser from "./Forms/DeleteUser";
import axios from "axios";

const UsersDashboardTableItem = (props) => { //retorna uma linha com os dados do filme
    const [modalUpdateShow, setModalUpdateShow] = React.useState(false);
    const [modalDeleteShow, setModalDeleteShow] = React.useState(false);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/users/others",
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
                <td className="text-center">{props.email}</td>
                <td className="text-center">{props.role}</td>
                <td className="text-center">{props.dob.toString().split('T')[0]}</td>
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
            <UpdateUser show={modalUpdateShow} onHide={() => setModalUpdateShow(false)} id={props.id}
                        onSubmit={() => updateTable()}/>}
            {modalDeleteShow &&
            <DeleteUser show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} id={props.id}
                        onSubmit={() => updateTable()}/>}
        </React.Fragment>
    );
}
export default UsersDashboardTableItem;