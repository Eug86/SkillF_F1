import React, {useState} from "react";
import JsonFile from '../cities/cities.json';
import Form from "react-bootstrap/Form";
import "../styles/Cities.css";

function Cities({onChange}) {
    const [cities, setCities] = useState([]);
    if(!cities.length) {
    //console.log(JsonFile);
    setCities(JsonFile);
    }
    const handleNameChange = (event) => {
        onChange(event.target.value)
    }

    return (
            <Form.Select aria-label="Select city" id='c1'>
                {cities.map(city => <option key={city.id} value={city.name} onChange={handleNameChange}>{city.name}</option>)}
            </Form.Select>
    )
}

export default Cities;
