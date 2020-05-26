import React from 'react';
import './Patient.css';




const Patient = (props) => {

    return (
        <div className="Patient">
            <ul className="List">
                <li>Patient name: {props.name}</li>
                <li>Phone number: {props.phone}</li>
                <li>E-mail: {props.mail}</li>
                <li>Medical record: <a href="#">GET</a></li>
            </ul>
        </div>
    )




}


export default Patient;