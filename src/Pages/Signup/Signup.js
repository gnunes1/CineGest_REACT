import React from 'react';
import {Card} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {ROUTES} from "../../routes";
import {useForm} from "react-hook-form";
import axios from "axios";

import "./signup.css";

const Signup = () => {
    const history = useHistory();
    const {register, handleSubmit, errors, setError, getValues} = useForm();

    const onSubmit = data => {
        let formData = new FormData();
        formData.append("DoB", data.DoB);
        formData.append("Email", data.Email);
        formData.append("Name", data.Name);
        formData.append("Password", data.Password);

        axios.post(process.env.REACT_APP_API_URL + "/api/users/signup", formData)
            .then(function (response) {
                history.push(ROUTES.Login);
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("Button", undefined, "Erro inesperado.");
                } else if (error.response.status === 400) {
                    setError("Button", undefined, "Este email já está a ser usado.");
                } else {
                    setError("Button", undefined, "Erro inesperado.");
                }
                //setError("Button", undefined, error.response);
            });
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <Card id="login-card">
                        <Card.Body>
                            <Card.Title className="text-center">
                                <h1>
                                    <Link className="text-decoration-none text-muted" to={ROUTES.Welcome}>
                                        CineGest
                                    </Link>
                                </h1>
                            </Card.Title>
                            <Card.Title className="text-center text-dark" id="btnLogin">
                                Registar
                            </Card.Title>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <span className="text-muted">Nome</span>
                                    <input type="text" name="Name" ref={register({required: true})}
                                           className="form-control"/>
                                    {errors.Name &&
                                    <label className="text-danger">Insira o seu nome.</label>}
                                </div>
                                <div className="form-group">
                                    <span className="text-muted">Email</span>
                                    <input type="email" name="Email" ref={register({required: true})}
                                           className="form-control"/>
                                    {errors.Email &&
                                    <label className="text-danger">Insira o seu email.</label>}
                                </div>
                                <div className="form-group">
                                    <span className="text-muted">Password</span>
                                    <input type="password" name="Password" ref={register({required: true})}
                                           className="form-control"/>
                                    {errors.Password &&
                                    <label className="text-danger">Insira a sua password.</label>}
                                </div>
                                <div className="form-group">
                                    <span className="text-muted">Repita a sua password</span>
                                    <input type="password" name="Password2" ref={register({
                                        required: true,
                                        validate: value => value === getValues("Password")
                                    })}
                                           className="form-control"/>
                                    {errors.Password2 &&
                                    <label className="text-danger">As passwords não coincidem.</label>}
                                </div>
                                <div className="form-group">
                                    <span className="text-muted">Data de nascimento</span>
                                    <input type="date" className="form-control" name="DoB"
                                           ref={register({required: true})}/>
                                    {errors.DoB &&
                                    <label className="text-danger">Insira a sua data de nascimento.</label>}
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit" className="btn btn-success btn-block"
                                           value="Criar conta" name="button"/>
                                    {errors.Button &&
                                    <label className="text-danger mt-1 mb-0">{errors.Button.message}</label>}
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signup;