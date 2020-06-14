import React, {useState} from 'react';

import {Card} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {ROUTES} from "../../routes";
import {useForm} from "react-hook-form";
import axios from 'axios';

import "./login.css";
import {useRecoilState} from "recoil";
import UserStore from "../../Stores/User";

const Login = () => {
    const history = useHistory();
    const {register, handleSubmit, errors, setError} = useForm();
    const [userStore, setUserStore] = useRecoilState(UserStore);

    const onSubmit = data => {

        let formData = new FormData();
        formData.append("Email", data.Email);
        formData.append("Password", data.Password);

        axios.post(process.env.REACT_APP_API_URL + "/api/users/login", formData)
            .then(function (response) {

                localStorage.setItem("token", response.data.token);
                setUserStore({name: response.data.name, role: response.data.role});

                history.push(ROUTES.Welcome);
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("Button", undefined, "Erro inesperado.");
                } else if (error.response.status === 400) {
                    setError("Button", undefined, error.response.data);
                } else {
                    setError("Button", undefined, "Erro inesperado.");
                }
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
                                Iniciar Sessão
                            </Card.Title>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <span className="text-muted">Email</span>
                                    <input type="email" name="Email" ref={register({required: true})}
                                           className="form-control" placeholder="Insira o seu email"/>
                                    {errors.Email &&
                                    <label className="text-danger">Insira o seu email.</label>}
                                </div>
                                <div className="form-group">
                                    <span className="text-muted">Password</span>
                                    <input type="password" name="Password" ref={register({required: true})}
                                           className="form-control" placeholder="Insira o seu nome"/>
                                    {errors.Password &&
                                    <label className="text-danger">Insira a sua password.</label>}

                                </div>
                                <div className="form-group mb-0">
                                    <div className="row">
                                        <div className="col-md mt-1">
                                            <Link to={ROUTES.Signup} className="small">Ainda não tem conta?</Link>
                                        </div>
                                        <div className="col-md text-right">
                                            <input type="submit" className="btn btn-success btn-block" value="Entrar"
                                                   name="Button"/>
                                        </div>
                                    </div>
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

export default Login;