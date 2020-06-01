import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";

const CreateUser = (props) => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        //fetch aqui
        console.log(data);
    }

    const [fileName, setFileName] = useState("Escolha a imagem");
    const handleChange = (e) => {
        if (e.target.files.length === 0) {
            setFileName("Escolha a imagem");
        } else {
            setFileName(e.target.files[0].name);
        }
    }

    useEffect(() => {
        setFileName("Escolha a imagem");
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
                        <div className="form-group col-md-3">
                            <span className="text-muted">Idade</span>
                            <input type="number" name="age" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.age &&
                            <label className="text-danger">Insira a idade do utilizador.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted">Cargo</span>
                            <select name="role" ref={register({required: true})}
                                    className="form-control">
                                <option value="Admin">Administrador</option>
                                <option value="User">Utilizador</option>
                            </select>
                        </div>
                    </div>
                    <span className="text-muted">Fotografia</span>
                    <div className="form-group col-md-12">
                        <input type="file" name="image" ref={register()}
                               className="custom-file-input" onChange={handleChange}/>
                        <label className="custom-file-label">{fileName}</label>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-primary" value="Adicionar"/>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    )
};

export default CreateUser;