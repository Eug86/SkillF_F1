import React, {useState} from "react";
//import axios from "axios";
import Table from "react-bootstrap/Table";


function Weathers({name}, {weathers})  {

    return (
        <>
            <h1>{name}</h1>
            <Table striped bordered hover variant="dark">
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
