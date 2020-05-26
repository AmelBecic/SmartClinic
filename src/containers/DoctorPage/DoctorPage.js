import React , {Component} from 'react';
import PatietList from '../PatientsList/PatientList';
import SearchBox from './SearchBox/SearchBox';
import PatientList from '../PatientsList/PatientList';
import './DoctorPage.css';



class DoctorPage extends Component {
    constructor () {
        super()
        this.state = {
            patients: [] , 
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then (users => this.setState({patients: users }));
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
       
    }
    render () { 
        const {patients , searchfield} = this.state;
        const filteredPatients = patients.filter (patients => {
            return patients.name.toLowerCase().includes(searchfield.toLowerCase());
        })

       
        
        return (
        
        
            <div className="body">
                <SearchBox searchChange={this.onSearchChange}/>
                <PatientList  Patients = {filteredPatients}/>
            </div>

            
               
        );
    }

}

export default DoctorPage;