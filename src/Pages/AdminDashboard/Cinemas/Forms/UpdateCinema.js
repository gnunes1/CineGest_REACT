import React, {useEffect} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";
import axios from "axios";

const UpdateCinema = (props) => {
    const {register, handleSubmit, errors, setError, setValue} = useForm();

    useEffect(() => { //insere os dados atuais do cinema
        axios.get(process.env.REACT_APP_API_URL + "/api/cinemas/" + props.id,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setValue("name", response.data.name)
                setValue("location", response.data.location)
                setValue("city", response.data.city)
                setValue("capacity", response.data.capacity)
            })
            .catch(function (error) {
            });

    }, []);

    const onSubmit = data => {
        let formData = new FormData();
        formData.append("Name", data.name);
        formData.append("City", data.city);
        formData.append("City", data.city);
        formData.append("Location", data.location);
        formData.append("Capacity", data.capacity);

        axios.put(process.env.REACT_APP_API_URL + "/api/cinemas/" + props.id, formData,
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
                    Alterar Cinema
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <span className="text-muted">Nome</span>
                            <input type="text" name="name" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.name &&
                            <label className="text-danger">Insira o nome do cinema.</label>}
                        </div>
                        <div className="form-group col-md-5">
                            <span className="text-muted">Cidade</span>
                            <input type="text" name="city" ref={register({required: true})} className="form-control"/>
                            {errors.city &&
                            <label className="text-danger">Insira a cidade do cinema.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <span className="text-muted">Localidade</span>
                            <input type="text" name="location" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.location &&
                            <label className="text-danger">Insira a localidade do cinema.</label>}
                        </div>
                        <div className="form-group col-md">
                            <span className="text-muted">Capacidade</span>
                            <input type="number" min="1" name="capacity" ref={register({required: true})}
                                   className="form-control col-md-6"/>
                            {errors.capacity &&
                            <label className="text-danger">Insira a capacidade do cinema.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-primary" value="Alterar"/>
                        </div>
                        {errors.Button &&
                        <label className="text-danger mt-2">{errors.Button.message}</label>}
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default UpdateCinema;