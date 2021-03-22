import React from 'react'
import './App.scss';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/home-page';





function  App() {
return (
      
<div className="App">
<Switch>
    <Route path='/sign-up' component={Signup} />
    <Route path='/log-in' component={Login} />
    <Route path='/Home' component={Homepage} />
</Switch>


</div>


    

);
}

export default App;