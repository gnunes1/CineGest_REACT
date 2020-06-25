import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import CGNavbar from "../../Components/Navbar/CGNavbar";
import {Container, Image} from "react-bootstrap";
import {useRecoilState} from "recoil";
import UserStore from "../../Stores/User";
import {useHistory} from "react-router-dom";
import {ROUTES} from "../../routes";

import "./settings.css"

const Settings = (props) => {
    const [userStore, setUserStore] = useRecoilState(UserStore);
    const {register, handleSubmit, errors, setError, setValue, getValues} = useForm();
    const [fileName, setFileName] = useState("");
    const [avatar, setAvatar] = useState("");
    const history = useHistory();

    const updateData = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/users/current",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setValue("name", response.data.name);
                setValue("email", response.data.email);
                setValue("dob", response.data.doB);
                setValue("role", response.data.role);
                setAvatar(response.data.avatar);
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("button", undefined, "Erro inesperado.");
                } else {
                    setError("button", undefined, error.response.data);
                }
            });
    }

    useEffect(updateData, []);


    const onSubmit = data => {
        let formData = new FormData();
        if (data.image !== undefined) formData.append("Avatar", data.image[0]);
        if (data.password !== undefined) formData.append("Password", data.password);

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("dob", data.dob);

        axios.put(process.env.REACT_APP_API_URL + "/api/users/current", formData,
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setUserStore({name: getValues("name"), avatar: userStore.avatar, role: userStore.role});
                history.push(ROUTES.Welcome);
            })
            .catch(function (error) {
                if (error.response === undefined) {
                    setError("button", undefined, "Erro inesperado.");
                } else {
                    setError("button", undefined, error.response.data);
                }
            });
    }

    const handleChange = (e) => {
        if (e.target.files.length === 0) {
            setFileName("");
        } else {
            setFileName(e.target.files[0].name);
        }
    }
    useEffect(() => {
        setFileName("");
        setError("Button", "");
    }, [props])


    return (
        <React.Fragment>
            <CGNavbar/>
            <Container fluid>
                <h2 className="mt-3">Alterar dados da conta</h2>
                <div className="card col-9 mt-4 ml-3">
                    <div className="card-horizontal">
                        <div className="row justify-content-center align-items-center mx-1">
                            <Image src={avatar} rounded id="avatar"/>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                    <div className="form-group col-5">
                                        <span className="text-muted">Nome</span>
                                        <input type="text" name="name" ref={register({required: true})}
                                               className="form-control"/>
                                        {errors.name &&
                                        <label className="text-danger">Insira o nome do utilizador.</label>}
                                    </div>
                                    <div className="form-group col-7">
                                        <span className="text-muted">Email</span>
                                        <input type="email" name="email" ref={register({required: true})}
                                               className="form-control"/>
                                        {errors.email &&
                                        <label className="text-danger">Insira o email do utilizador.</label>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-7">
                                        <span className="text-muted">Password</span>
                                        <input type="password" name="password" ref={register()}
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <span className="text-muted">Data de nascimento</span>
                                        <input type="date" name="dob" ref={register({required: true})}
                                               className="form-control"/>
                                        {errors.dob &&
                                        <label className="text-danger">Insira a data de nascimento do
                                            utilizador.</label>}
                                    </div>
                                    <div className="form-group col">
                                        <span className="text-muted">Cargo</span>
                                        <input type="text" name="role" className="form-control" readOnly={true}
                                               ref={register}/>
                                    </div>
                                </div>
                                <span className="text-muted">Fotografia</span>
                                <div className="form-group col-12">
                                    <input type="file" name="image" ref={register()}
                                           className="custom-file-input" onChange={handleChange}/>
                                    <label className="custom-file-label">{fileName}</label>
                                </div>
                                <div className="form-row">
                                    <div className="col-2">
                                        <input type="submit" className="btn btn-primary" value="Alterar"
                                               name="button"/>
                                    </div>
                                    {errors.button &&
                                    <label className="text-danger mt-2">{errors.button.message}</label>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Settings;