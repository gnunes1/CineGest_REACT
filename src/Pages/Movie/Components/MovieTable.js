import React, {useEffect, useState} from 'react';
import {Col, Table} from "react-bootstrap";
import MovieTableItem from "./MovieTableItem";

const MovieTable = (props) => { // tabela com as sessões do filme
    const [data, setData] = useState([]);
    useEffect(() => { //on create
        setData(props.movie);
    }, [])

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Comprar</th>
                <th className="align-middle text-center">Cinema</th>
                <th className="align-middle text-center">Localização</th>
                <th className="align-middle text-center">Data</th>
                <th className="align-middle text-center">Hora de início</th>
                <th className="align-middle text-center">Hora de fim</th>
                <th className="align-middle text-center">Lugares disponíveis</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada sessão do filme
                <MovieTableItem
                    key={item.id}
                    cinema={item.cinema}
                    localizacao={item.localizacao}
                    data={item.data}
                    inicio={item.inicio}
                    fim={item.fim}
                    lugares={item.lugares}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default MovieTable;