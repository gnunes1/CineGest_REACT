import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";

const UpdateCinema = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => { //on create get table row values
        setData(props);
        console.log(props);
    }, []);

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        //fetch aqui
        console.log(data);
    }

    return (
        <CGModal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                    Alterar Cinema
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <span className="text-muted">Nome</span>
                            <input type="text" name="name" ref={register({required: true})}
                                   className="form-control" value={props.name}/>
                            {errors.name &&
                            <label className="text-danger">Insira o nome do cinema.</label>}
                        </div>
                        <div className="form-group col-md-5">
                            <span className="text-muted">Cidade</span>
                            <input type="text" name="city" ref={register({required: true})} className="form-control"
                                   value={props.city}/>
                            {errors.city &&
                            <label className="text-danger">Insira a cidade do cinema.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <span className="text-muted">Localidade</span>
                            <input type="text" name="location" ref={register({required: true})}
                                   className="form-control" value={props.location}/>
                            {errors.location &&
                            <label className="text-danger">Insira a localidade do cinema.</label>}
                        </div>
                        <div className="form-group col-md">
                            <span className="text-muted">Capacidade</span>
                            <input type="number" min="1" name="capacity" ref={register({required: true})}
                                   className="form-control col-md-6" value={props.capacity}/>
                            {errors.capacity &&
                            <label className="text-danger">Insira a capacidade do cinema.</label>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-primary" value="Alterar"/>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default UpdateCinema;