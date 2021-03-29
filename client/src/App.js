import React from 'react'
import './App.scss';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home-page';
import Routes from './Routes'
import Footer from './components/footer/footer'
import Dashboard from './pages/back/Dashboard/Dashboard';





function  App() {
return (
      
<div className="App">
 <Routes /> 
 {/* <Homepage/> */}
</div>


    

);
}

export default App;