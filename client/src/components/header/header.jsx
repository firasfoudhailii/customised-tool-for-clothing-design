import React, { Component, useContext } from 'react';
import './header.styles.scss';
import { menuitems } from './menuitems';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import {useAuth} from '../../context/user-context';

class Header extends Component{
    

state = {clicked: false}
handleClick=() => {
    this.setState({ clicked : !this.state.clicked})
}
    render(){
     
    return (
        
        <nav className="NavbarItems">
            <h1 className="navbar-logo"> NoName</h1>
            
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                
                {menuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="item.cName" href={item.url}>
                                {item.title}
                            </a>
                            </li>
                    )
                })}
                
            </ul>
        
            <Link to="/signup">
            <Button>Sign Up</Button>
            </Link>
            <Link to="/login">
            <Button>Log In</Button>
            </Link>
        </nav>
    );
}
}
export default Header;