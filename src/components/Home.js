import React, { Component } from 'react';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="homeCont">
        <div>
        <h1 className="homeName">Alfy Hushairi</h1>
        <p className ="homeTitle">INTEGRATION_ENGINEER . MUSICIAN . FRONTEND_DEVELOPER</p>
        </div>
        <img className="homeLogo" src={require('../img/logo.png')} />
        <div className = "socialCont">
          <a href = "https://www.linkedin.com/in/alfyhushairi/" target="_blank">
            <img className="socialLogo" src={require('../img/linkedin.png')} />
          </a>
          <a href = "https://github.com/AlfyH" target="_blank">
            <img className="socialLogo" src={require('../img/git.png')} />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
