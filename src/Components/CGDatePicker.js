import React, {useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CGDatePicker = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker selected={startDate} className="form-control" onChange={date => setStartDate(date)}
                    dateFormat="dd/MM/yyyy" todayButton={props.todayButton}/>
    )
}

export default CGDatePicker;