import React from 'react';

const MovieTableItem = React.memo((props) => { //retorna uma linha com os dados de uma sessão do filme indicado

    function toLocalDate(date) {
        let d = new Date(date);
        d.setMinutes(d.getMinutes() + (-2 * d.getTimezoneOffset()));
        d = new Date(d).toISOString().split(".")[0].replace("T", " ");
        return d.substring(0, d.length - 3)
    }

    return (
        <tr>
            {localStorage.getItem("token") && <td className="text-center">
                <input name="ticket" type="radio" required={true} onChange={() => props.setTicket(props.id)}/>
            </td>}

            <td className="text-center">{props.cinema}</td>
            <td className="text-center">{props.city}</td>
            <td className="text-center">{props.location}</td>
            <td className="text-center">{toLocalDate(props.start)}</td>
            <td className="text-center">{toLocalDate(props.end)}</td>
            <td className="text-center">{props.seats}/{props.capacity}</td>
        </tr>
    );
})
export default MovieTableItem;