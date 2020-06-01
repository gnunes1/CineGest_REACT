import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import MoviesDashboardTableItem from "./MoviesDashboardTableItem";

const MoviesDashboardTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(list);
    }, []);

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Nome</th>
                <th className="align-middle text-center">Descrição</th>
                <th className="align-middle text-center">Gêneros</th>
                <th className="align-middle text-center">Duração</th>
                <th className="align-middle text-center">Idade mínima</th>
                <th className="align-middle text-center">Configurações</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada filme
                <MoviesDashboardTableItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    genres={item.genres}
                    duration={item.duration}
                    minAge={item.minAge}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default MoviesDashboardTable;

const list = [{
    id: "1",
    name: "a",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    genres: "Ação, Bla, bla, bla, Ação, Bla, bla, bla, Ação, Bla, bla, bla, Ação, Bla, bla, bla, Ação, Bla, bla, bla, Ação, Bla, bla, bla, Ação, Bla, bla, bla, ",
    duration: "92",
    minAge: "1"
}];