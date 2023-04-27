import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import Weather from "./Weather";
import "../styles/Weathers.css";


function Weathers({name, weathers})  {

    return (
        <>
            <h1>{name}</h1>
            {weathers.map(weather => <Weather key={weather.main.dt} weather={weather}/>)}
        </>
    );
}

export default Weathers;
