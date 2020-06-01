import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";

const CreateMovie = (props) => {
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
                    Adicionar Filme
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
                            <label className="text-danger">Insira o nome do filme.</label>}
                        </div>
                        <div className="form-group col-md-6">
                            <span className="text-muted">Descrição</span>
                            <textarea name="description" ref={register({required: true})} className="form-control"/>
                            {errors.description &&
                            <label className="text-danger">Insira a descrição do filme.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <span className="text-muted">Gêneros</span>
                            <textarea name="genres" ref={register({required: true})}
                                      className="form-control"/>
                            {errors.genres &&
                            <label className="text-danger">Insira os gêneros do filme.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted">Duração (em minutos)</span>
                            <input type="number" min="1" name="duration" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.duration &&
                            <label className="text-danger">Insira a duração do filme.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted">Idade mínima</span>
                            <input type="number" min="1" name="minAge" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.minAge &&
                            <label className="text-danger">Insira a idade mínima para assistir ao filme.</label>}
                        </div>
                    </div>
                    <span className="text-muted">Cartaz</span>
                    <div className="form-group col-md-12">
                        <input type="file" name="poster" ref={register({required: true})}
                               className="custom-file-input" onChange={handleChange}/>
                        <label className="custom-file-label">{fileName}</label>
                        {errors.poster &&
                        <label className="text-danger">Insira o cartaz do filme.</label>}
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-primary" value="Adicionar"/>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default CreateMovie;