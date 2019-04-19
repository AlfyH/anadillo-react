import React, { Component } from 'react';

class Quote extends Component {

  render() {
    return (
      <div className = "quoteDiv">
      <h3>Oops something went wrong with the public API and I had to take this down...</h3>
      <p>But hey! drop me an email if you want to know more about me. I will be adding new content to this site as I grow my portfolio.</p>
      <p>Do check out my other work at</p>
      <a href = "https://www.alfyhushairi.com" target="_blank">www.alfyhushairi.com</a>
      <br/><br/>
      <p>This website was entirely designed and developed by me using React. The repo can be found in my Github profile!</p>
      <div className = "socialCont">
        <a href = "https://www.linkedin.com/in/alfyhushairi/" target="_blank">
          <img className="socialLogo" src={require('../../img/linkedin.png')} />
        </a>
        <a href = "https://github.com/AlfyH" target="_blank">
          <img className="socialLogo" src={require('../../img/git.png')} />
        </a>
      </div>

      </div>
    );
  }

}

export default Quote;
