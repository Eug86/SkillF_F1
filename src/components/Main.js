import React , { Component } from "react";
import "../styles/Main.css";
import Weathers from "./Weathers";
import YM from "./YM";
import Cities from "./Cities";

class Main extends Component {
    render() {
        return (
            <main>
                <Weathers/>
                <Cities />
                <YM />
            </main>
        );
    }
}

export default Main;