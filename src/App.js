import React, { useState } from 'react';

import { Header } from './components/Header';
import { Scoreboard } from './components/Score';

import './App.css';

const App = () => {
  const [ score, setScore ] = useState(0);
  const [ highScore, setHighScore ] = useState(0);

  const incrementScore = () => {
    setScore( score + 1 );
  };

  const inputHighscore = () => {
    if( highScore > score ) {
      setScore(0);
      return;
    }

    setHighScore( score );
    setScore(0);
  };

  return (
    <div className='App'>
      <Header innerText='MEMORY CARD GAME'/>
      <Scoreboard score={ score } highScore={ highScore }/>
      <button onClick={ incrementScore }>SCORE</button>
      <button onClick={ inputHighscore }>HIGHSCORE</button>
    </div>
  );
};

export { App };