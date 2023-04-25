import React, {useState} from "react";
import "../styles/Main.css";
import Weathers from "./Weathers";
import YM from "./YM";
import Cities from "./Cities";

function Main() {
    const [name, setName] = useState("Tyumen");
    const handleNameChange = (name) => {
       setName(name)
    };

    return (
        <main>
            <Cities onChange={handleNameChange}/>
            <YM />
            <Weathers name={name}/>
        </main>
    );
}

export default Main;