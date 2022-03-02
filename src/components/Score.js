import React from 'react';

const Scoreboard = ( props ) => {
  return (
    <div className='scoreboard-container'>
      <div className='score'>SCORE: { props.score }</div>
      <div className='score'>HIGHSCORE: { props.highscore }</div>
    </div>
  );
};

export { Scoreboard };