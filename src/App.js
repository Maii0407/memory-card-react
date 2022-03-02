import React from 'react';

import { Gameboard } from './components/Gameboard';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='header-container'>
        <h1>DIGIMON MEMORY GAME</h1>
        <h4>Get points by clicking a DIGIMON but if you click it more than once its gameover for you.</h4>
      </div>
      <Gameboard/>
    </div>
  );
};

export { App };