import { useContext } from "react";
import { useRouter } from "next/router";

import { GlobalContext } from "@/pages/_app";

import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

export const NextLevelScreen = () => {
  const { setNextLevel, newGame } = useContext( GlobalContext );
  const router = useRouter();

  const handleClose = () => {
    setNextLevel( false );
    router.push('/');
  };

  const handleNewGame = () => {
    setNextLevel( false );
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
            onClick={ () => handleClose() }
            variant='outline'
            colorScheme='red'
          >
            Finish
          </Button>
          <Button
            onClick={ () => handleNewGame() }
            variant='outline'
            colorScheme='green'
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}