import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className = "aboutPage">
      <h1 className="homeName">Alfy Hushairi</h1>
      <p className ="homeTitle">INTEGRATION_ENGINEER . MUSICIAN . FRONTEND_DEVELOPER</p>
      <img className="homeLogo" src={require('../img/alfy.png')} />
      <h1 className = "aboutMe">About me</h1>
      <h3>EDUCATION</h3>
<p>UNSW, Sydney, Australia — BEng Mechatronics Engineering (Hons 2.2), 2014</p>
<p>NYP, Singapore — Diploma in Mechatronics Engineering (Biomedical), 2009</p>
<p>Orita Sinclair,Singapore — Diploma in Interaction Design, 2018 - Ongoing</p>
<p>Coursera - Certificate in Human-Centred Design - 2017 - Ongoing</p>
<div className = "aboutCont">
  <div>
  <p>I am trained in the field of Mechatronics Engineering - a field that sparked my interest because it allowed me to become well-versed in a wide range of technical knowledge (Mechanical, Electronics and Software). Through this journey, I chanced upon the field of Exhibition. Exhibitions is a field that I can directly apply my 3 interests to: Machines, Social Interaction and Art.</p>
  <p>I then moved on to OTT & Media industries where I developed an excellent technical understanding of architectural design, mapping client’s requirements, systems integration, application design and end-to-end delivery and operation with multi-vendor integration.</p>
  <p>I am a firm believer of the Agile method. I am working towards excellent proficiency in full stack web development. This site is a constant work in progress as I improve my skills and discover new tools in developement.</p>
  <p>In my free time, I freelance in a professional band and integration work for museum exhibits.</p>
  <p>I am an extremely self-driven individual when it comes to delivering objectives that I believe in. My unique qualities stem from the fact that I am passionate about both technical solutions and music. I am a very capable communicator and have developed a fantastic rapport with my clients.</p>
</div>
</div>
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

export default About;
