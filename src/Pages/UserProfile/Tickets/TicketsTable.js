import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import TicketsTableItem from "./TicketsTableItem";
import axios from "axios";

const TicketsTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/tickets/current",
            {headers: {token: localStorage.getItem("token")}})
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
            });
    }, []);

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Cinema</th>
                <th className="align-middle text-center">Cidade</th>
                <th className="align-middle text-center">Localização</th>
                <th className="align-middle text-center">Filme</th>
                <th className="align-middle text-center">Lugar</th>
                <th className="align-middle text-center">Data de início</th>
                <th className="align-middle text-center">Data de fim</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada filme
                <TicketsTableItem
                    key={item.id}
                    seat={item.seat}
                    movie={item.movie}
                    cinema={item.cinema}
                    start={item.start}
                    end={item.end}
                    city={item.city}
                    location={item.location}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default TicketsTable;

const list = [{
    id: "1",
    seat: "1",
    movie: "ghjvvg",
    timeStart: "14:45",
    dateStart: "01-01-2020",
    dateEnd: "01-01-2020"
}];