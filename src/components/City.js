import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function City(props) {
    return (
    <option value={props.city.name}>{props.city.name}</option>
    )
}

City.propTypes = {
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
};

export default City;