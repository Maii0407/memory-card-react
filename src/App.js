import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { StartPage } from './pages/Start';
import { PlayPage } from './pages/Play';

import {
  Flex
} from '@chakra-ui/react';

export const GlobalContext = createContext( null );

export const App = () => {
  const [ allDigimon, setAllDigimon ] = useState([]);
  const [ currentArray, setCurrentArray ] = useState([]);
  const [ clickedArray, setClickedArray ] = useState([]);

  return (
    <Flex
      direction='column'
    >

      <GlobalContext.Provider
        value={{
          allDigimon, setAllDigimon,
          currentArray, setCurrentArray,
          clickedArray, setClickedArray
        }}
      >
        <Routes>

          <Route path='/' element={ <StartPage /> } />
          <Route path='/play' element={ <PlayPage /> } />

        </Routes>
      </GlobalContext.Provider>

    </Flex>
  )
};