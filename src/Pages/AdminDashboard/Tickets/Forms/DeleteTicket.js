import React from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";

const DeleteTicket = (props) => {
    const list = {id: props.id};
    const {handleSubmit} = useForm();
    const onSubmit = data => {
        //fetch aqui
        console.log(list);
    }

    return (
        <CGModal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                    Apagar Bilhete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="text-muted">Tem a certeza que quer apagar o bilhete?</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-danger" value="Apagar"/>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default DeleteTicket;

const list = [{}];