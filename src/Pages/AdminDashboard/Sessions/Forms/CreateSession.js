import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {Modal} from "react-bootstrap";
import CGModal from "../../../../Components/CGModal";

const CreateSession = (props) => {
    const {register, handleSubmit, errors, setError, setValue, getValues, clearError} = useForm();
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    const [options, setOptions] = useState();
    const [options2, setOptions2] = useState();
    const [duration, setDuration] = useState();
    const [minDate, setMinDate] = useState(new Date().toISOString().split('.')[0].substring(0,
        new Date().toISOString().split('.')[0].length - 3)
    );

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/movies",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData(response.data);
                if (response.data !== undefined) setDuration(response.data[0].duration)
                setOptions(response.data.map((data) =>
                    <option
                        key={data.id}
                        value={data.id}
                    >
                        {data.name}
                    </option>
                ));
            })
            .catch(function (error) {
            });
        axios.get(process.env.REACT_APP_API_URL + "/api/cinemas",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData2(response.data);
                setOptions2(response.data.map((data) =>
                    <option
                        key={data.id}
                        value={data.id}
                    >
                        {data.name}
                    </option>
                ));
            })
            .catch(function (error) {
            });
    }, []);

    const onSubmit = data => {

        let formData = new FormData();
        formData.append("Start", data.start);
        formData.append("End", data.end);
        formData.append("Movie", data.movies);
        formData.append("Cinema", data.cinemas);

        axios.post(process.env.REACT_APP_API_URL + "/api/sessions", formData,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                props.onSubmit();
                props.onHide()
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("Button", undefined, "Erro inesperado.");
                } else {
                    setError("Button", undefined, error.response.data);
                }
            });
    }

    const handleMovieChange = (e) => {
        setValue("movies", e.target.value);

        data.map((item) => {
                if (item.id == e.target.value) setDuration(item.duration);
            }
        );
    }
    const handleCinemaChange = (e) => {
        setValue("cinemas", e.target.value);
    }

    const onTimeChange = () => {        //acrescenta a duração do filme ao tempo do fim
        let now = new Date(getValues("start"));
        now.setMinutes(now.getMinutes() + duration + (-1 * now.getTimezoneOffset()));
        now = new Date(now);
        setValue("end", now.toISOString().split(".")[0]);

        clearError("Button");
    }

    return (
        <CGModal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title className="text-dark">
                    Adicionar Sessão
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-5">
                            <span className="text-muted">Cinema</span>
                            <select name="cinemas" className="custom-select" onChange={handleCinemaChange}
                                    ref={register({required: true})}>
                                {options2}
                            </select>
                        </div>

                        <div className="form-group col-5">
                            <span className="text-muted">Filme</span>
                            <select name="movies" className="custom-select" onChange={handleMovieChange}
                                    ref={register({required: true})}>
                                {options}
                            </select>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-4">
                            <span className="text-muted">Data de Início</span>
                            <input type="datetime-local" name="start" ref={register({required: true})}
                                   className="form-control" onChange={() => onTimeChange()}
                                   min={minDate}/>
                            {errors.start &&
                            <label className="text-danger">Insira a data de início da sessão.</label>}
                        </div>
                        <div className="form-group col-4">
                            <span className="text-muted">Data de Fim</span>
                            <input type="datetime-local" name="end" ref={register()}
                                   className="form-control" readOnly={true}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <input type="submit" className="btn btn-primary mr-2" value="Adicionar"/>
                            {errors.Button &&
                            <label className="text-danger mt-2">{errors.Button.message}</label>}
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </CGModal>
    );
};

export default CreateSession;