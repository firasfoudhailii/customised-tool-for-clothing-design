import React from 'react'
import './App.scss';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home-page';
import Routes from './Routes'





function  App() {
return (
      
<div className="App">
<Routes />
</div>


    

);
}

export default App;