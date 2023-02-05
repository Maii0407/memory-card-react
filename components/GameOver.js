import { useContext } from "react";
import { useRouter } from "next/router";

import { GlobalContext } from "@/pages/_app";

import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

export const GameOverScreen = () => {
  const {
    setGameOver,
    setCurrentLevel,
    refreshGame,
  } = useContext( GlobalContext );
  const router = useRouter();

  const onFinishGame = () => {
    setGameOver( false );
    setCurrentLevel(1);

    router.push('/');
  };

  const onNewGame = () => {
    setGameOver( false );
    setCurrentLevel(1);
    refreshGame();
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
            onClick={ () => onFinishGame() }
            variant='outline'
            colorScheme='red'
            textStyle={{ lg: 'pixel' }}
          >
            Close
          </Button>
          <Button
            onClick={ () => onNewGame() }
            variant='outline'
            colorScheme='green'
            textStyle={{ lg: 'pixel' }}
          >
            New Game
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}