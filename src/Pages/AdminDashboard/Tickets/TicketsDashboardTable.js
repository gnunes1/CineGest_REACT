import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import TicketsDashboardTableItem from "./TicketsDashboardTableItem";
import axios from "axios";

const TicketsDashboardTable = () => {

    const [data, setData] = useState([]);

    const updateTable = () => {
        axios.get(process.env.REACT_APP_API_URL + "/api/tickets",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
            });
    }

    useEffect(updateTable, []);

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Email do utilizador</th>
                <th className="align-middle text-center">Cinema</th>
                <th className="align-middle text-center">Cidade</th>
                <th className="align-middle text-center">Localização</th>
                <th className="align-middle text-center">Filme</th>
                <th className="align-middle text-center">Lugar</th>
                <th className="align-middle text-center">Data de início</th>
                <th className="align-middle text-center">Data de fim</th>
                <th className="align-middle text-center">Configurações</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada filme
                <TicketsDashboardTableItem
                    key={item.id}
                    id={item.id}
                    cinema={item.cinema}
                    email={item.email}
                    seat={item.seat}
                    movie={item.movie}
                    start={item.start}
                    end={item.end}
                    city={item.city}
                    location={item.location}
                    setData={setData}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default TicketsDashboardTable;