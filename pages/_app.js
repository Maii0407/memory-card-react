import '@fontsource/press-start-2p';

import { useState, createContext } from 'react';
import { useRouter } from 'next/router';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    pixel: {
      fontFamily: `'Press Start 2P', cursive`
    }
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'white',
      }
    }
  }
});

export const GlobalContext = createContext( null );

export default function App({ Component, pageProps }) {
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

  const router = useRouter()

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

  const newGame = () => {
    shuffleArray( allDigimon, setAllDigimon );
    setCurrentArray( allDigimon.slice( 0, currentLevel * 4 ) );
    setClickedArray([]);
    router.push( '/play' );
  };

  return (
    <ChakraProvider theme={ theme } >
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
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ChakraProvider>
  )
}
