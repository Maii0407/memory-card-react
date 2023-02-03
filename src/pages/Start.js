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

      //all digimon array
      const data = response.data;

      //Fisher Yates algorithm for shuffling the digimon list array
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      setAllDigimon( data );

      //this is for setting up level 1 of the game
      const level1Array = data.slice( 0, 4 );
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
        textStyle='pixel'
        variant='outline'
        colorScheme='green'
      >
        New Game
      </Button>

    </Flex>
  );
};