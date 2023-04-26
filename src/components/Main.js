import React, {useState} from "react";
import "../styles/Main.css";
//import Weathers from "./Weathers";
import YM from "./YM";
import Cities from "./Cities";
import axios from "axios";


function Main() {
    const [name, setName] = useState("Surgut");
    const [WeaUrl, setWeaUrl] = useState("");
    const handleNameChange = (name) => {
       setName(name);
       setWeaUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${name},ru&APPID=fe4c586fd2c32a2e3e13d3ad079f4ea1&units=metric`);
    };
    const [weathers, setWeathers] = useState([]);
    name.onChange = () => {
        if(!weathers.length) {
            axios.get(WeaUrl).then(res => {
                setWeathers(res.data.list);
                console.log(res.data);
            });
        }
    }

    return (
        <main>
            <Cities onChange={handleNameChange}/>
            <YM />
            <Weathers name={name} weathers={weathers}/>
        </main>
    );
}

export default Main;