import React , { Component } from "react";
import { YMaps, Map } from "react-yandex-maps";

class YM extends Component {
    render() {
        return (
            <YMaps>
                 <div>
                     My awesome application with maps!
                     <Map defaultState={{ center: [61.24, 73.39], zoom: 10 }} />
                 </div>
            </YMaps>
        );
    }
}

export default YM;