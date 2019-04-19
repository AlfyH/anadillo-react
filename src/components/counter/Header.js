import React from 'react';
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import PropTypes from 'prop-types'

const Header = ({players,title}) => {
    return (
      <div className = "counterDiv">
      <Stats
      players = {players}/>
      </div>
    );
}

  Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
  };


export default Header;
