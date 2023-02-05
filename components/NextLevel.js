import { useContext } from "react";
import { useRouter } from "next/router";

import { GlobalContext } from "@/pages/_app";

import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

export const NextLevelScreen = () => {
  const {
    setNextLevel,
    setCurrentLevel,
    refreshGame,
    updateHighscore
  } = useContext( GlobalContext );

  const router = useRouter();

  const onFinishGame = () => {
    updateHighscore();
    setNextLevel( false );
    setCurrentLevel(1);

    router.push('/');
  };

  const onNextLevel = () => {
    updateHighscore();
    //increase current level
    setNextLevel( false );

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
          color='green.600'
        >
          You Win
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
            Finish
          </Button>
          <Button
            onClick={ () => onNextLevel() }
            variant='outline'
            colorScheme='green'
            textStyle={{ lg: 'pixel' }}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}