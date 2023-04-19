import React, {useState} from "react";
import JsonFile from '../cities/cities.json';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import City from "./City";

function Cities() {
    const [cities, setCities] = useState([]);
    if(!cities.length) {
    console.log(JsonFile);
    setCities(JsonFile);
    }

    return (
          <Form.Select aria-label="Select city" id='c1'>
             {cities.map(city => <City city={city}/>)}
          </Form.Select>
          )
}
        /*<table>
            <thead><tr><th>Name</th><th>Lat</th><th>Lng</th></tr></thead>
            <tbody>
                {cities.map(city => <tr>
                    <td>{city.name}</td>
                    <td>{city.lat}</td>
                    <td>{city.lng}</td>
                </tr>)}
            </tbody>
        </table>*/

/*City.propTypes = {
    name: PropTypes.object,
    lat: PropTypes.object,
    lng: PropTypes.object,
};*/

export default Cities;
