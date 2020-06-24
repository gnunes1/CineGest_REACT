import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {Modal} from "react-bootstrap";
import CGModal from "../../../../Components/CGModal";

const DeleteSession = (props) => {
    const {handleSubmit, errors, setError} = useForm();

    useEffect(() => {
        setError("Button", "");
    }, [props])


    const onSubmit = data => {
        axios.delete(process.env.REACT_APP_API_URL + "/api/sessions/" + props.id,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.onHide();
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
                    Remover Sessão - {props.cinema} - {props.movie}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-6">
                            <span className="text-muted">Data de Início</span>
                            <input type="datetime-local" className="form-control" readOnly={true}
                                   defaultValue={props.start}/>
                        </div>
                        <div className="form-group col-6">
                            <span className="text-muted">Data de Fim</span>
                            <input type="datetime-local" className="form-control" readOnly={true}
                                   defaultValue={props.end}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <input type="submit" className="btn btn-danger mr-2" value="Remover"/>
                            {errors.Button &&
                            <label className="text-danger mt-2">{errors.Button.message}</label>}
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default DeleteSession;