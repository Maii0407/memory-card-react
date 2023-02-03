import { useContext } from "react";

import { GlobalContext } from "../App";

import {
  Flex,
  Image,
  Text,
  useToast
} from "@chakra-ui/react";

export const PlayCards = ({ data }) => {
  const {
    currentArray,
    setCurrentArray,
    clickedArray,
    setClickedArray,
    shuffleArray,
    setGameOver
  } = useContext( GlobalContext );
  const toast = useToast();

  const handleClick = () => {
    const found = clickedArray.find( element => element === data );

    if( found ) {
      toast({
        title: `${ data.name } Already Clicked`,
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true
      });

      setGameOver( true );
    }
    else {
      setClickedArray([ ...clickedArray, data ]);

      shuffleArray( currentArray, setCurrentArray );
  
      toast({
        title: `${ data.name } +1`,
        status: 'success',
        duration: 3000,
        position: 'top',
        isClosable: true
      })
    }
  }

  return (
    <Flex
      direction='column'
      alignItems='center'
      gap='10px'
      backgroundColor='gray.700'
      borderRadius='10px'
      padding='10px'
    >
      <Image
        onClick={ () => handleClick() }
        src={ data.img }
        alt={ data.name }
        borderRadius='10px'
      />
      <Text
        fontSize={{ base: '10px' }}
      >
        { data.name }
      </Text>
    </Flex>
  );
}