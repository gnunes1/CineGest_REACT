import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import MovieTableItem from "./MovieTableItem";

import "./movieTable.css"

const MovieTable = React.memo(() => { // tabela com as sessões do filme
    const [data, setData] = useState([])
    useEffect(() => { //on componentUpdate
        setData(list);
    }, [])

    return (
        <Table responsive id="movieTable">
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
});

export default MovieTable;

const list = [{
    id: "1",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "2",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "3",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "4",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "5",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "6",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "64",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "63",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "62",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "61",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "60",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "69",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "68",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "67",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
}, {
    id: "66",
    cinema: "Anfiteatro de Tomar",
    localizacao: "Rua principal",
    data: "20-1-19",
    inicio: "15:43",
    fim: "16:30",
    lugares: "2/50"
},];