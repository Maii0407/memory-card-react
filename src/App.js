import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { StartPage } from './pages/Start';
import { PlayPage } from './pages/Play';
import { GameOverScreen } from './components/GameOver';
import { NextLevelScreen } from './components/NextLevel';
import { WinScreen } from './components/Win';

import {
  Flex
} from '@chakra-ui/react';

export const GlobalContext = createContext( null );

export const App = () => {
  const [ allDigimon, setAllDigimon ] = useState([]);
  //array for current level of difficulty
  const [ currentArray, setCurrentArray ] = useState([]);
  //array for already clicked cards
  const [ clickedArray, setClickedArray ] = useState([]);
  const [ currentLevel, setCurrentLevel ] = useState( 1 );

  //used for game end condition
  const [ gameOver, setGameOver ] = useState( false );
  const [ nextLevel, setNextLevel ] = useState( false );
  const [ win, setWin ] = useState( false );

  const navigate = useNavigate();

  const shuffleArray = ( array, setArrayFunc ) => {
    let newArr = [ ...array ];

    //Fisher Yates algorithm for shuffling the digimon list array
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }

    return setArrayFunc( newArr )
  };

  const fetchDigimonList = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://digimon-api.vercel.app/api/digimon'
      });

      return shuffleArray( response.data, setAllDigimon );
    }
    catch( error ) {
      console.log({ error })
    }
  };

  const newGame = () => {
    shuffleArray( allDigimon, setAllDigimon );
    setCurrentArray( allDigimon.slice( 0, currentLevel * 4 ) );
    setClickedArray([]);
    navigate( '/play' );
  };

  useEffect(() => {
    if( allDigimon.length === 0 ) {
      navigate('/');
      fetchDigimonList()
    }
    return;
  });

  return (
    <Flex
      direction='column'
    >

      <GlobalContext.Provider
        value={{
          allDigimon, setAllDigimon,
          currentArray, setCurrentArray,
          clickedArray, setClickedArray,
          currentLevel, setCurrentLevel,
          gameOver, setGameOver,
          nextLevel, setNextLevel,
          win, setWin,
          shuffleArray,
          newGame
        }}
      >

        <Routes>

          <Route path='/' element={ <StartPage /> } />
          <Route path='/play' element={ <PlayPage /> } />

        </Routes>
        {
          gameOver ? <GameOverScreen />
          : null
        }
        {
          nextLevel ? <NextLevelScreen />
          : null
        }
        {
          win ? <WinScreen />
          : null
        }

      </GlobalContext.Provider>

    </Flex>
  )
};