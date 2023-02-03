import { useContext } from 'react';

import { GlobalContext } from '../App';

import {
  Flex,
  Button
} from "@chakra-ui/react";

export const StartPage = () => {
  const { newGame} = useContext( GlobalContext );
  
  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
    >

      <Button
        onClick={ () => newGame() }
        textStyle='pixel'
        variant='outline'
        colorScheme='green'
      >
        New Game
      </Button>

    </Flex>
  );
};