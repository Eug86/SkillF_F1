import React, {useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";


function Weathers({name})  {
    let WeaUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${name},ru&APPID=fe4c586fd2c32a2e3e13d3ad079f4ea1&units=metric`;
    const [weathers, setWeathers] = useState([]);
    if(!weathers.length) {
        axios.get(WeaUrl).then(res => {
        setWeathers(res.data.list);
        console.log(res.data.list);
        });
    }
    return (
        <>
            <h1>{name}</h1>
            <Table>
                <thead><tr><th>Date</th><th>Temp</th></tr></thead>
                <tbody>
                    {weathers.map(weather =>
                        <tr>
                            <td>{weather.dt_txt}</td><td>{weather.main.temp}</td>
                        </tr>)}
                </tbody>
            </Table>
        </>
    );
}

export default Weathers;
