import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";
import axios from "axios";

const CreateUser = (props) => {

    const {register, handleSubmit, errors, setError} = useForm();
    const onSubmit = data => {
        let formData = new FormData();
        formData.append("Avatar", data.image[0]);
        formData.append("Name", data.name);
        formData.append("Password", data.password);
        formData.append("Email", data.email);
        formData.append("DoB", data.dob);
        formData.append("Role", data.role);

        axios.post(process.env.REACT_APP_API_URL + "/api/users", formData,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.onHide();
                props.onSubmit();
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("button", undefined, "Erro inesperado.");
                } else {
                    setError("button", undefined, error.response.data);
                }
            });
    }

    const [fileName, setFileName] = useState("");
    const handleChange = (e) => {
        if (e.target.files.length === 0) {
            setFileName("");
        } else {
            setFileName(e.target.files[0].name);
        }
    }

    useEffect(() => {
        setFileName("");
    }, [props])

    return (
        <CGModal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                    Adicionar Utilizador
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
                            <label className="text-danger">Insira o nome do utilizador.</label>}
                        </div>
                        <div className="form-group col-md-7">
                            <span className="text-muted">Email</span>
                            <input type="email" name="email" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.email &&
                            <label className="text-danger">Insira o email do utilizador.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <span className="text-muted">Password</span>
                            <input type="password" name="password" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.password &&
                            <label className="text-danger">Insira o password do utilizador.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-3">
                            <span className="text-muted">Data de nascimento</span>
                            <input type="date" className="form-control" name="dob"
                                   ref={register({required: true})}/>
                            {errors.dob &&
                            <label className="text-danger">Insira a data de nascimento do utilizador.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted">Cargo</span>
                            <select name="role" ref={register({required: true})}
                                    className="form-control">
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <span className="text-muted">Fotografia</span>
                        <div className="form-group col-md-12">
                            <input type="file" name="image" ref={register({required: true})}
                                   className="custom-file-input" onChange={handleChange}/>
                            <label className="custom-file-label">{fileName}</label>
                            {errors.image &&
                            <label className="text-danger mt-2">Insira a fotografia do utilizador.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-primary" value="Adicionar" name="button"/>
                        </div>
                        {errors.button &&
                        <label className="text-danger mt-2">{errors.button.message}</label>}
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    )
};

export default CreateUser;