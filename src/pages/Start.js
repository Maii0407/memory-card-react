import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from '../App';

import {
  Flex,
  Button
} from "@chakra-ui/react";

export const StartPage = () => {
  const { setAllDigimon, setCurrentArray } = useContext( GlobalContext );
  
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://digimon-api.vercel.app/api/digimon'
      });

      const digimonList = response.data;

      //Fisher Yates algorithm for shuffling the digimon list array
      for (let i = digimonList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = digimonList[i];
        digimonList[i] = digimonList[j];
        digimonList[j] = temp;
      }

      //this is for setting up level 1 of the game
      const level1Array = digimonList.slice( 0, 10 );

      setAllDigimon( digimonList );
      setCurrentArray( level1Array );
    }
    catch( error ) {
      console.log({ error })
    }
    finally {
      navigate( '/play' );
    }
  }

  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      border='1px solid red'
    >

      <Button
        onClick={ () => handleClick() }
        variant='outline'
        colorScheme='green'
      >
        New Game
      </Button>

    </Flex>
  );
};