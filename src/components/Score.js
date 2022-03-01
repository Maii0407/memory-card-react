import React from 'react';

const Scoreboard = ( props ) => {
  return (
    <div className='scoreboard-container'>
      <div className='score'>Current Score: { props.score }</div>
      <div className='score'>Highscore: { props.highScore }</div>
    </div>
  );
};

export { Scoreboard };