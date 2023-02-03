import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../App";

import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

export const WinScreen = () => {
  const { setWin } = useContext( GlobalContext );
  const navigate = useNavigate();

  const handleClose = () => {
    setWin( false );
    navigate('/');
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
        >
          Finish
        </Button>
      </Flex>
    </Flex>
  )
}