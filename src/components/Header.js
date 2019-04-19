import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <ul className="mainNav">
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/about" >ABOUT ME</NavLink></li>
        <li><NavLink to="/image-search">IMAGE SEARCH</NavLink></li>
        <li><NavLink to="/game-counter">GAME COUNTER</NavLink></li>
        <li><NavLink to="/quote">RANDOM QUOTE</NavLink></li>
        <li><a href = "https://www.alfyhushairi.com" target="_blank">OTHER SKILLS</a></li>
      </ul>
    );
  }

}

export default Header;
