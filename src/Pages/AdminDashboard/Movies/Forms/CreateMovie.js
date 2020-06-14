import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";
import axios from "axios";

const CreateMovie = (props) => {
    const {register, handleSubmit, errors, setError, getValues} = useForm();
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
        setError("Button", "");
    }, [props])


    const onSubmit = data => {

        let formData = new FormData();
        formData.append("Poster", data.Poster[0]);
        formData.append("Name", data.Name);
        formData.append("Description", data.Description);
        formData.append("Genres", data.Genres);
        formData.append("Duration", data.Duration);
        formData.append("Min_age", data.Min_age);
        formData.append("Highlighted", data.Highlighted);

        axios.post(process.env.REACT_APP_API_URL + "/api/movies", formData,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.onHide();

            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("Button", undefined, "Erro inesperado.");
                } else if (error.response.status === 500) {
                    setError("Button", undefined, "Não foi possível criar o filme.");
                } else {
                    setError("Button", undefined, "Erro inesperado.");
                }
            });
    }


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
                            <input type="text" name="Name" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.Name &&
                            <label className="text-danger">Insira o nome do filme.</label>}
                        </div>
                        <div className="form-group col-md-6">
                            <span className="text-muted">Descrição</span>
                            <textarea name="Description" ref={register({required: true})} className="form-control"/>
                            {errors.Description &&
                            <label className="text-danger">Insira a descrição do filme.</label>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <span className="text-muted">Gêneros</span>
                            <textarea name="Genres" ref={register({required: true})}
                                      className="form-control"/>
                            {errors.Genres &&
                            <label className="text-danger">Insira os gêneros do filme.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted">Duração (em minutos)</span>
                            <input type="number" min="1" name="Duration" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.Duration &&
                            <label className="text-danger">Insira a duração do filme.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted">Idade mínima</span>
                            <input type="number" min="1" name="Min_age" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.Min_age &&
                            <label className="text-danger">Insira a idade mínima para assistir ao filme.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted mr-5">Em destaque</span><br/>
                            <label className="text-muted">
                                <input name="Highlighted" type="radio" value={true} ref={register({required: true})}
                                />
                                {" "}Sim
                            </label>
                            <label className="text-muted ml-1">
                                <input name="Highlighted" type="radio" value={false} ref={register({required: true})}
                                       defaultChecked={true}/>
                                {" "}Não
                            </label>

                        </div>
                    </div>
                    <span className="text-muted">Cartaz</span>
                    <div className="form-group col-md pl-0">
                        <input type="file" name="Poster" accept="image/*" ref={register({required: true})}
                               className="custom-file-input" onChange={handleChange}/>
                        <label className="custom-file-label">{fileName}</label>
                        {errors.Poster &&
                        <label className="text-danger">Insira o cartaz do filme.</label>}
                    </div>

                    <div className="form-row">
                        <div className="col-md-2">
                            <input type="submit" className="btn btn-primary" value="Adicionar" name="Button"/>
                        </div>
                        {errors.Button &&
                        <label className="text-danger mt-2">{errors.Button.message}</label>}
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default CreateMovie;