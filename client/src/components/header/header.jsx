import React, { Component } from 'react';
import './header.styles.scss';
import { menuitems } from './menuitems';
import { Button } from '../button/Button';


class Header extends Component{
    
    
state = {clicked: false}
handleClick=() => {
    this.setState({ clicked : !this.state.clicked})
}
    render(){
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"> NoName</h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
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
            <Button>Sign Up</Button>
        
            <Button>Log In</Button>
        </nav>
    );
}
}
export default Header;