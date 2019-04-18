import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <ul className="mainNav">
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/about" >ABOUT ME</NavLink></li>
        <li><NavLink to="/image-search">IMAGE SEARCH</NavLink></li>
        <li><NavLink to="/game-timer">GAME TIMER</NavLink></li>
        <li><NavLink to="/random-quote">RANDOM QUOTE</NavLink></li>
        <li><NavLink to="/other">OTHER SKILLS</NavLink></li>
      </ul>
    );
  }

}

export default Header;
