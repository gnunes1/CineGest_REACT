import React from 'react';
import {Table} from "react-bootstrap";
import CinemasDashboardTableItem from "./CinemasDashboardTableItem";

const CinemasDashboardTable = (props) => {

    const data = props.data;

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Nome</th>
                <th className="align-middle text-center">Cidade</th>
                <th className="align-middle text-center">Localização</th>
                <th className="align-middle text-center">Capacidade</th>
                <th className="align-middle text-center">Configurações</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada cinema
                <CinemasDashboardTableItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    city={item.city}
                    location={item.location}
                    capacity={item.capacity}
                    setData={props.setData}
                />
            ))}
            </tbody>
        </Table>
    );
};

export default CinemasDashboardTable;