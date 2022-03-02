import React, { useState } from 'react';
import uniqid from 'uniqid';

import { Scoreboard } from './Score';
import { RenderCards } from './RenderCard';
import { Card } from './Card';

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

  const [ agumon, setAgumon ] = useState({ name: 'AGUMON', icon: agumonIcon, status: 0});
  const [ gabumon, setGabumon ] = useState({ name: 'GABUMON', icon: gabumonIcon, status: 0});
  const [ tentomon, setTentomon ] = useState({ name: 'TENTOMON', icon: tentomonIcon, status: 0});
  const [ palmon, setPalmon ] = useState({ name: 'PALMON', icon: palmonIcon, status: 0});
  const [ piyomon, setPiyomon ] = useState({ name: 'PIYOMON', icon: piyomonIcon, status: 0});
  const [ gomamon, setGomamon ] = useState({ name: 'GOMAMON', icon: gomamonIcon, status: 0});
  const [ patamon, setPatamon ] = useState({ name: 'PATAMON', icon: patamonIcon, status: 0});
  const [ tailmon, setTailmon ] = useState({ name: 'TAILMON', icon: tailmonIcon, status: 0});

  const shuffleArr = ( array ) => {
    let currentIndex = array.length, randomIndex;

    while( currentIndex !== 0 ) {
      randomIndex = Math.floor( Math.random() * currentIndex );
      currentIndex--;

      [ array[ currentIndex ], array[ randomIndex ] ] = [ array[ randomIndex ], array[ currentIndex ] ];
    }
    return array;
  };

  const addHighscore = () => {
    if( highscore > score ) {
      setScore(0);
      return;
    }
    setHighscore( score );
    setScore(0);
  };

  const resetGame = () => {
    setAgumon( state => ({ ...state, status: 0}));
    setGabumon( state => ({ ...state, status: 0}));
    setTentomon( state => ({ ...state, status: 0}));
    setPalmon( state => ({ ...state, status: 0}));
    setPiyomon( state => ({ ...state, status: 0}));
    setGomamon( state => ({ ...state, status: 0}));
    setPatamon( state => ({ ...state, status: 0}));
    setTailmon( state => ({ ...state, status: 0}));
  };

  const clickAgumon = () => {
    if( agumon.status === 0 ) {
      setScore( score + 1 );
      setAgumon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickGabumon = () => {
    if( gabumon.status === 0 ) {
      setScore( score + 1 );
      setGabumon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickTentomon = () => {
    if( tentomon.status === 0 ) {
      setScore( score + 1 );
      setTentomon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickPalmon = () => {
    if( palmon.status === 0 ) {
      setScore( score + 1 );
      setPalmon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickPiyomon = () => {
    if( piyomon.status === 0 ) {
      setScore( score + 1 );
      setPiyomon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickGomamon = () => {
    if( gomamon.status === 0 ) {
      setScore( score + 1 );
      setGomamon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickPatamon = () => {
    if( patamon.status === 0 ) {
      setScore( score + 1 );
      setPatamon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };
  const clickTailmon = () => {
    if( tailmon.status === 0 ) {
      setScore( score + 1 );
      setTailmon( state => ({ ...state, status: 1}));
    } else {
      addHighscore();
      resetGame();
    }
  };

  const cardArray = [ <Card icon={ agumon.icon } name={ agumon.name } key={ uniqid()} function={ clickAgumon }/>,
    <Card icon={ gabumon.icon } name={ gabumon.name } key={ uniqid() } function={ clickGabumon }/>,
    <Card icon={ tentomon.icon } name={ tentomon.name } key={ uniqid() } function={ clickTentomon }/>,
    <Card icon={ palmon.icon } name={ palmon.name } key={ uniqid() } function={ clickPalmon }/>,
    <Card icon={ piyomon.icon } name={ piyomon.name } key={ uniqid() } function={ clickPiyomon }/>,
    <Card icon={ gomamon.icon } name={ gomamon.name } key={ uniqid() } function={ clickGomamon }/>,
    <Card icon={ patamon.icon } name={ patamon.name } key={ uniqid() } function={ clickPatamon }/>,
    <Card icon={ tailmon.icon } name={ tailmon.name } key={ uniqid() } function={ clickTailmon }/> ];

  return (
    <div className='gameboard'>
      <Scoreboard score={ score } highscore={ highscore }/>
      <RenderCards array={ shuffleArr( cardArray ) }/>
    </div>
    
  );
};

export { Gameboard };