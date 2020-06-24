import React from 'react';
import {Table} from "react-bootstrap";
import MoviesDashboardTableItem from "./MoviesDashboardTableItem";

const MoviesDashboardTable = (props) => {

    const data = props.data;

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Nome</th>
                <th className="align-middle text-center">Descrição</th>
                <th className="align-middle text-center">Gêneros</th>
                <th className="align-middle text-center">Duração</th>
                <th className="align-middle text-center">Idade mínima</th>
                <th className="align-middle text-center">Em destaque</th>
                <th className="align-middle text-center">Configurações</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria a linha respetiva de cada filme
                <MoviesDashboardTableItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    genres={item.genres}
                    duration={item.duration}
                    min_age={item.min_age}
                    highlighted={item.highlighted}
                    setData={props.setData}
                />
            ))}
            </tbody>
        </Table>
    );
};

export default MoviesDashboardTable;