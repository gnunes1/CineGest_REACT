import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import TicketsDashboardTableItem from "./TicketsDashboardTableItem";

const TicketsDashboardTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(list);
    }, []);

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Email do utilizador</th>
                <th className="align-middle text-center">Lugar</th>
                <th className="align-middle text-center">Filme</th>
                <th className="align-middle text-center">Hora de início</th>
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
                    email={item.email}
                    seat={item.seat}
                    movie={item.movie}
                    timeStart={item.timeStart}
                    dateStart={item.dateStart}
                    dateEnd={item.dateEnd}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default TicketsDashboardTable;

const list = [{
    id: "1",
    email: "a@a",
    seat: "1",
    movie: "ghjvvg",
    timeStart: "14:45",
    dateStart: "01-01-2020",
    dateEnd: "01-01-2020"
}];