import { useContext } from "react";
import { useRouter } from "next/router";

import { GlobalContext } from "@/pages/_app";

import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

export const WinScreen = () => {
  const { setWin, updateHighscore } = useContext( GlobalContext );
  const router = useRouter();

  const handleClose = () => {
    updateHighscore();
    setWin( false );
    router.push('/');
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
        padding='50px 5px'
        alignItems='center'
        borderRadius='10px'
        gap='10px'
      >
        
        <Text
          textStyle='pixel'
          color='green.600'
          textAlign='center'
        >
          LOL YOU WON,
          at what cost
        </Text>
        <Button
          onClick={ () => handleClose() }
          variant='outline'
          colorScheme='green'
          textStyle={{ lg: 'pixel' }}
        >
          Finish
        </Button>
      </Flex>
    </Flex>
  )
}