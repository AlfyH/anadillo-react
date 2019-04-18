import React, { Component } from 'react';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="homeCont">
      <h1 className="homeName">Alfy Hushairi</h1>
      <p className ="homeTitle">INTEGRATION ENGINEER.MUSICIAN.INTERACTION DESIGNER</p>
      <img className="homeLogo" src={require('../img/logo.png')} />
      </div>
    );
  }
}

export default Home;
