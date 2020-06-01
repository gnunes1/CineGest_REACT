import React from "react";
import {Modal} from "react-bootstrap";

const CGModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            {props.children}
        </Modal>
    );
}

export default CGModal;
