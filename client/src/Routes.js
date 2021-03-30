import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Homepage from './pages/front/home-page';
import Contactpage from './pages/front/contact-page';



// Components 
import Home from './components/Back/MainView/Home/Home';
import Profile from './components/Back/MainView/Profile/Profile';
import Prototypes from './components/Back/MainView/Prototypes/Prototypes';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profileb' component={Profile} />
            <Route path='/prototypesb' component={Prototypes} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/Home' component={Homepage} />
            <Route path='/contactus' component={Contactpage}/>
        </Switch>
    )
}

export default Routes