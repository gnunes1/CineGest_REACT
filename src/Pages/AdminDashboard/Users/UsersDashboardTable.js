import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import UsersDashboardTableItem from "./UsersDashboardTableItem";

const UsersDashboardTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(list);
    }, []);

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
                <UsersDashboardTableItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    city={item.city}
                    location={item.location}
                    capacity={item.capacity}
                />
            ))}

            </tbody>
        </Table>
    );
};

export default UsersDashboardTable;

const list = [{
    id: "1",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "2",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "3",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "4",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "5",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "6",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "7",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "8",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "9",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "10",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
}, {
    id: "11",
    name: "Anfiteatro de Tomar",
    city: "Tomar",
    location: "Rua principal",
    capacity: "50"
},];