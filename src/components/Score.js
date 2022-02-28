import React from 'react';

const Scoreboard = ( props ) => {
  return (
    <div className='scoreboard-container'>
      <p className='score'>Current Score: { props.score }</p>
      <p className='highScore'>Highscore: { props.highScore }</p>
    </div>
  );
};

export { Scoreboard };