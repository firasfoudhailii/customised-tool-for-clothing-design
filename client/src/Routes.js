import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Homepage from './pages/home-page';


// Components 
import Home from './components/Back/MainView/Home/Home';
import Profile from './components/Back/MainView/Profile/Profile';
import Prototypes from './components/Back/MainView/Prototypes/Prototypes';
import Contactpage from './pages/front/contact-page';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contactus' component={Contactpage}/>
            <Route path='/profileb' component={Profile} />
            <Route path='/prototypesb' component={Prototypes} />
            <Route path='/sign-up' component={Signup} />
            <Route path='/log-in' component={Login} />
            <Route path='/Home' component={Homepage} />
            
        </Switch>
    )
}

export default Routes