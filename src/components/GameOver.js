import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../App";

import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

export const GameOverScreen = () => {
  const { setGameOver, newGame } = useContext( GlobalContext );
  const navigate = useNavigate();

  const handleClose = () => {
    setGameOver( false );
    navigate('/');
  };

  const handleNewGame = () => {
    setGameOver( false );
    newGame();
  };

  return (
    <Flex
      width='100vw'
      height='100vh'
      position='fixed'
      top='0'
      left='0'
      zIndex='2'
      justifyContent='center'
      alignItems='center'
      backgroundColor='rgba(0,0,0,0.7)'
    >
      <Flex
        direction='column'
        backgroundColor='gray.900'
        padding='50px 20px'
        alignItems='center'
        borderRadius='10px'
      >
        
        <Text
          textStyle='pixel'
          color='red.600'
        >
          Game Over
        </Text>
        <Flex
          direction='row'
          gap='10px'
          padding='10px'
        >
          <Button
            onClick={ () => handleClose() }
            variant='outline'
            colorScheme='red'
          >
            Close
          </Button>
          <Button
            onClick={ () => handleNewGame() }
            variant='outline'
            colorScheme='green'
          >
            New Game
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}