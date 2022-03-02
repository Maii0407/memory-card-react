import React, { useState } from 'react';

import { Scoreboard } from './Score';
import { RenderCards } from './RenderCard';

import agumonIcon from './image-asset/agumon.jpeg';
import gabumonIcon from './image-asset/gabumon.png'
import tentomonIcon from './image-asset/tentomon.jpg'
import palmonIcon from './image-asset/palmon.png'
import piyomonIcon from './image-asset/piyomon.jpg'
import gomamonIcon from './image-asset/gomamon.png'
import patamonIcon from './image-asset/patamon.png'
import tailmonIcon from './image-asset/tailmon.jpg'


const Gameboard = () => {
  const [ score, setScore ] = useState(0);
  const [ highscore, setHighscore ] = useState(0);

  const [ agumon, setAgumon ] = useState({ name: 'AGUMON', icon: agumonIcon });
  const [ gabumon, setGabumon ] = useState({ name: 'GABUMON', icon: gabumonIcon });
  const [ tentomon, setTentomon ] = useState({ name: 'TENTOMON', icon: tentomonIcon });
  const [ palmon, setPalmon ] = useState({ name: 'PALMON', icon: palmonIcon });
  const [ piyomon, setPiyomon ] = useState({ name: 'PIYOMON', icon: piyomonIcon });
  const [ gomamon, setGomamon ] = useState({ name: 'GOMAMON', icon: gomamonIcon });
  const [ patamon, setPatamon ] = useState({ name: 'PATAMON', icon: patamonIcon });
  const [ tailmon, setTailmon ] = useState({ name: 'TAILMON', icon: tailmonIcon });

  const cardArray = [ agumon, gabumon, tentomon, palmon, piyomon, gomamon, patamon, tailmon ];

  const shuffleArr = ( array ) => {
    let currentIndex = array.length, randomIndex;

    while( currentIndex !== 0 ) {
      randomIndex = Math.floor( Math.random() * currentIndex );
      currentIndex--;

      [ array[ currentIndex ], array[ randomIndex ] ] = [ array[ randomIndex ], array[ currentIndex ] ];
    }
    return array;
  };

  const addScore = () => {
    setScore( score + 1 );
  };

  const addHighscore = () => {
    if( highscore > score ) {
      setScore(0);
      return;
    }
    setHighscore( score );
    setScore(0);
  };

  return (
    <div className='gameboard'>
      <Scoreboard score={ score } highscore={ highscore }/>
      <RenderCards array={ shuffleArr( cardArray ) } function={ addScore }/>
      <button onClick={ addHighscore }>ADD HIGHSCORE</button>
    </div>
    
  );
};

export { Gameboard };