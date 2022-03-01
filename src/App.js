import React from 'react';

import { Header } from './components/Header';
import { Gameboard } from './components/Gameboard';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header innerText='DIGIMON MEMORY GAME'/>
      <Gameboard/>
    </div>
  );
};

export { App };