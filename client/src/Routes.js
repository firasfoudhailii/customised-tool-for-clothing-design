import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./components/login/login'));
const Signup = React.lazy(() => import ('./components/signup/signup'));
const Homepage = React.lazy(() => import ('./pages/front/home-page'));
const Contactpage = React.lazy(() => import ('./pages/front/contact-page'));
const About = React.lazy(() => import ('./pages/front/about-page'));
const NotFound = React.lazy(() => import ('./pages/front/notfound-page'));
const AllPrototypes = React.lazy(() => import ('./pages/front/all-prototype-page'));
const Mydesigns = React.lazy(() => import ('./pages/front/my-designs-page') )
const SingleDesign = React.lazy(() => import ('./pages/front/single-design-page'));
const Dashboard = React.lazy(() => import('./pages/back/admin-page'));

// Components 
const Home = React.lazy(() => import ('./components/Back/MainView/Home/Home'));
const Profile = React.lazy(() => import ('./components/Back/MainView/Profile/Profile'));
const Prototypes = React.lazy(() => import ('./components/Back/MainView/Prototypes/Prototypes'));

const Routes = () => {
    return (
        <BrowserRouter basename="/">
        <Suspense fallback={<p>...Loading page please wait</p>}>
        <Switch>
              <Route path='/homeb' component={Home} />
            <Route path='/profileb' component={Profile} />
            <Route path='/prototypesb' component={Prototypes} />
            
            <Route exact path='/Home' 
            render={(props) => <Homepage {...props} />} >
            </Route>
            <Route exact path='/Dashboard' 
            render={(props) => <Dashboard {...props} />} >
            </Route>
            <Route path='/signup' 
            render={(props) => <Signup {...props} />} >
            </Route>            
            <Route path='/login'
            render={(props) => <Login {...props} />} >
            </Route>
          
            <Route path='/contactus' 
            render={(props) => <Contactpage {...props} />} >
            </Route>
            <Route path='/About' 
            render={(props) => <About {...props} />} >
            </Route>
            <Route path='/Prototypes'
            render={(props) => <AllPrototypes {...props} />} >
            </Route>
            <Route path='/mydesigns'
            render={(props) => <Mydesigns {...props} />} >
            </Route>
            <Route path='/singledesign/:id'
            render={(props) => <SingleDesign {...props} />} >
            </Route>
            <Route path='*' 
            render={(props) => <NotFound {...props} />} >
            </Route>
        </Switch>
        </Suspense>
        </BrowserRouter>
    )
}

export default Routes