import React , { Component } from "react";
import { YMaps, Map } from "react-yandex-maps";

function YM() {

        return (
            <YMaps>
                 <div>
                     <Map defaultState={{ center: [61.24, 73.39], zoom: 10 }} />
                 </div>
            </YMaps>
        );
}

export default YM;