import React, {useState} from "react";
import "../styles/Main.css";
import Weathers from "./Weathers";
import YM from "./YM";
import Cities from "./Cities";

function Main() {
    const [name, setName] = useState("default");
    const handleNameChange = (name) => {
       setName(name)
    };
    console.log(name)
    return (
        <main>
            <Cities onChange={handleNameChange}/>
            <Weathers name={name}/>
            <YM />
        </main>
    );
}

export default Main;