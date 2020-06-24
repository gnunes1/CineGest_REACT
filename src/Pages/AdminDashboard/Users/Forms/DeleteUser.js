import React from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";
import axios from "axios";

const DeleteUser = (props) => {
    const {handleSubmit, setError, errors} = useForm();
    const onSubmit = data => {
        axios.delete(process.env.REACT_APP_API_URL + "/api/users/" + props.id,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.onHide();
                props.onSubmit();
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("Button", undefined, "Erro inesperado.");
                } else {
                    setError("Button", undefined, error.response.data);
                }
            });
    }

    return (
        <CGModal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                    Apagar Utilizador
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="text-muted">Tem a certeza que quer apagar o utilizador?</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-danger" value="Apagar" name="Button"/>
                        </div>
                        {errors.Button &&
                        <label className="text-danger mt-2">{errors.Button.message}</label>}
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default DeleteUser;