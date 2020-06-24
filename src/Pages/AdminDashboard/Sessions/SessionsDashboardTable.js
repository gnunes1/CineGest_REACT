import React from 'react';
import {Table} from "react-bootstrap";
import SessionsDashboardTableItem from "./SessionsDashboardTableItem";

const SessionsDashboardTable = (props) => {

    const data = props.data;

    function changeDateFormat(date) {
        let d = new Date(date);
        d.setMinutes(d.getMinutes() + (-2 * d.getTimezoneOffset()));
        d = new Date(d);
        return d.toISOString().split(".")[0];

    }

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Cinema</th>
                <th className="align-middle text-center">Filme</th>
                <th className="align-middle text-center">Data de início</th>
                <th className="align-middle text-center">Data de fim</th>
                <th className="align-middle text-center">Configurações</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada cinema
                <SessionsDashboardTableItem
                    key={item.id}
                    id={item.id}
                    cinema={item.cinema}
                    movie={item.movie}
                    start={changeDateFormat(item.start)}
                    end={changeDateFormat(item.end)}
                    setData={props.setData}
                />
            ))}
            </tbody>
        </Table>
    );
};

export default SessionsDashboardTable;