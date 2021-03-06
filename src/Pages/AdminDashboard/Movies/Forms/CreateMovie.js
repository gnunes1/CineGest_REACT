import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import CGModal from "../../../../Components/CGModal";
import axios from "axios";

const CreateMovie = (props) => {
    const {register, handleSubmit, errors, setError} = useForm();
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
        formData.append("Poster", data.poster[0]);
        formData.append("Name", data.name);
        formData.append("Description", data.description);
        formData.append("Genres", data.genres);
        formData.append("Duration", data.duration);
        formData.append("Min_age", data.min_age);
        formData.append("Highlighted", data.highlighted);

        axios.post(process.env.REACT_APP_API_URL + "/api/movies", formData,
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
                            <input type="number" min="1" name="min_age" ref={register({required: true})}
                                   className="form-control"/>
                            {errors.min_age &&
                            <label className="text-danger">Insira a idade mínima para assistir ao filme.</label>}
                        </div>
                        <div className="form-group col-md-3">
                            <span className="text-muted mr-5">Em destaque</span><br/>
                            <label className="text-muted">
                                <input name="highlighted" type="radio" value={true} ref={register({required: true})}
                                />
                                {" "}Sim
                            </label>
                            <label className="text-muted ml-1">
                                <input name="highlighted" type="radio" value={false} ref={register({required: true})}
                                       defaultChecked={true}/>
                                {" "}Não
                            </label>

                        </div>
                    </div>
                    <span className="text-muted">Cartaz</span>
                    <div className="form-group col-md pl-0">
                        <input type="file" name="poster" accept="image/*" ref={register({required: true})}
                               className="custom-file-input" onChange={handleChange}/>
                        <label className="custom-file-label">{fileName}</label>
                        {errors.poster &&
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