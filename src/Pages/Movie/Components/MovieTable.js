import React from 'react';
import {Table} from "react-bootstrap";
import MovieTableItem from "./MovieTableItem";

const MovieTable = (props) => { // tabela com as sessões do filme
    const data = props.data;

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                {localStorage.getItem("token") && <th className="align-middle text-center">Comprar</th>}
                <th className="align-middle text-center">Cinema</th>
                <th className="align-middle text-center">Cidade</th>
                <th className="align-middle text-center">Localização</th>
                <th className="align-middle text-center">Data de início</th>
                <th className="align-middle text-center">Data de fim</th>
                <th className="align-middle text-center">Lugares</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada sessão do filme
                <MovieTableItem
                    key={item.id}
                    id={item.id}
                    cinema={item.name}
                    city={item.city}
                    location={item.location}
                    start={item.start}
                    end={item.end}
                    seats={item.seats}
                    capacity={item.capacity}
                    setTicket={props.setTicket}
                />
            ))}
            </tbody>
        </Table>
    );
};

export default MovieTable;