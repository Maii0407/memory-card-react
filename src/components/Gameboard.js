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

  const addScore = () => {
    setScore( score + 1 );
  };

  const addHighscore = () => {
    setHighscore( score );
    setScore(0);
  };

  return (
    <div className='gameboard'>
      <Scoreboard score={ score } highscore={ highscore }/>
      <RenderCards array={ cardArray } function={ addScore }/>
      <button onClick={ addHighscore }>ADD HIGHSCORE</button>
    </div>
    
  );
};

export { Gameboard };

/*
<Card icon={ agumon.icon } name={ agumon.name } function={ addScore }/>
        <Card icon={ gabumon.icon } name={ gabumon.name } function={ addScore }/>
        <Card icon={ tentomon.icon } name={ tentomon.name } function={ addScore }/>
        <Card icon={ palmon.icon } name={ palmon.name } function={ addScore }/>
        <Card icon={ piyomon.icon } name={ piyomon.name } function={ addScore }/>
        <Card icon={ gomamon.icon } name={ gomamon.name } function={ addScore }/>
        <Card icon={ patamon.icon } name={ patamon.name } function={ addScore }/>
        <Card icon={ tailmon.icon } name={ tailmon.name } function={ addScore }/>
        */