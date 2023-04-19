import React, {useState} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import City from "./City";

function Weathers() {
    let WeaUrl = "http://api.openweathermap.org/data/2.5/weather?q="+"Moscow"+",ru&APPID=fe4c586fd2c32a2e3e13d3ad079f4ea1";
    const [name, setName] = useState(0);
    axios.get(WeaUrl).then(res => {
        //console.log(res.data.name);
        setName(res.data.name);
    });

    return (
        <h1>{name}</h1>
    );
}

export default Weathers;
