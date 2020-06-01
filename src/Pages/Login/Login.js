import React from 'react';

import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes";
import {useForm} from "react-hook-form";

import "./login.css";

const Login = () => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        //fetch aqui
        console.log(data);
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
                                <div className="form-row">
                                    <div className="mt-1 ml-2">
                                        <Link to={ROUTES.Signup} className="small">Ainda não tem conta?</Link>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md text-right">
                                        <input type="submit" className="btn btn-success btn-block" value="Entrar"/>
                                    </div>
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