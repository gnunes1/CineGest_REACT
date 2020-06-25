import React from 'react';

const TicketsTableItem = (props) => { //retorna uma linha com os dados do filme

    function toLocalDate(date) {
        let d = new Date(date);
        d.setMinutes(d.getMinutes() + (-2 * d.getTimezoneOffset()));
        d = new Date(d).toISOString().split(".")[0].replace("T", " ");
        return d.substring(0, d.length - 3)
    }

    return (
        <React.Fragment>
            <tr>
                <td className="text-center">{props.cinema}</td>
                <td className="text-center">{props.city}</td>
                <td className="text-center">{props.location}</td>
                <td className="text-center">{props.movie}</td>
                <td className="text-center">{props.seat}</td>
                <td className="text-center">{toLocalDate(props.start)}</td>
                <td className="text-center">{toLocalDate(props.end)}</td>
            </tr>
        </React.Fragment>
    );
}
export default TicketsTableItem;