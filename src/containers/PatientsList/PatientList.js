import React from 'react';
import Patient from './Patient/Patient';




const PatientList = ({Patients}) => {

    return (
        <div>
            {
                Patients.map((user , i) => {
                    return (
                        <Patient name={Patients[i].name} phone={Patients[i].phone} mail={Patients[i].email} />
                    )
                    
                })
            }
        </div>
    )




}


export default PatientList;