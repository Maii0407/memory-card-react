import React, { useState } from 'react';

import { Header } from './components/Header';
import { Scoreboard } from './components/Score';
import { Card } from './components/Card';

import agumonIcon from './image-asset/agumon.jpeg';

import './App.css';

const App = () => {
  const [ score, setScore ] = useState(0);
  const [ highScore, setHighScore ] = useState(0);

  const [ agumon, setAgumon ] = useState({ name: 'AGUMON', icon: agumonIcon });

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
      <div className='card-container'>
        <Card icon={ agumon.icon } name={ agumon.name }/>
      </div>
      <button onClick={ incrementScore }>SCORE</button>
      <button onClick={ inputHighscore }>HIGHSCORE</button>
    </div>
  );
};

export { App };