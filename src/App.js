import React from 'react';
import Home from './components/HomePage/HomePage';
import DoctorPage from './containers/DoctorPage/DoctorPage';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

const  App = () => {
  return (

      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/doctor" exact component={DoctorPage} />

      </Switch>
    
    
  );
}

export default App;
