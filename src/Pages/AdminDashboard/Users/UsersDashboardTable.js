import React from 'react';
import {Table} from "react-bootstrap";
import UsersDashboardTableItem from "./UsersDashboardTableItem";

const UsersDashboardTable = (props) => {

    const data = props.data;

    return (
        <Table responsive striped={true} className="text-white">
            <thead>
            <tr>
                <th className="align-middle text-center">Nome</th>
                <th className="align-middle text-center">Email</th>
                <th className="align-middle text-center">Cargo</th>
                <th className="align-middle text-center">Data de nascimento</th>
                <th className="align-middle text-center">Configurações</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item) => ( //cria rows para cada cinema
                <UsersDashboardTableItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    role={item.role}
                    dob={item.doB}
                    setData={props.setData}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default UsersDashboardTable;