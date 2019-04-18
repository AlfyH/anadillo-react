import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <ul className="mainNav">
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/about" >ABOUT ME</NavLink></li>
        <li><NavLink to="/cv">CV</NavLink></li>
        <li><NavLink to="/projects">PROJECTS</NavLink></li>
        <li><NavLink to="/music">MUSIC</NavLink></li>
        <li><NavLink to="/logodesign">LOGO DESIGN</NavLink></li>
      </ul>
    );
  }

}

export default Header;
