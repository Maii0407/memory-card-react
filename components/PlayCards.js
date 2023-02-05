import { useContext } from "react";

import { GlobalContext } from "@/pages/_app";

import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

export const PlayCards = ({ data }) => {
  const {
    currentArray,
    setCurrentArray,
    clickedArray,
    setClickedArray,
    shuffleArray,
    setGameOver,
    setCurrentLevel
  } = useContext( GlobalContext );

  const handleClick = () => {
    const found = clickedArray.find( element => element === data );

    if( found ) {
      //back to level 1 lol
      setCurrentLevel(1);
      setGameOver( true );
    }
    else {
      setClickedArray([ ...clickedArray, data ]);
      shuffleArray( currentArray, setCurrentArray );
    }
  }

  return (
    <Flex
      direction='column'
      alignItems='center'
      gap='10px'
      backgroundColor='gray.500'
      borderRadius='10px'
      padding='10px'
      _hover={{
        cursor: 'pointer'
      }}
    >
      <Image
        onClick={ () => handleClick() }
        src={ data.img }
        alt={ data.name }
        borderRadius='10px'
      />
      <Text
        textStyle={{ lg: 'pixel' }}
        fontSize={{ base: '10px' }}
        color='gray.900'
        fontWeight='bold'
      >
        { data.name }
      </Text>
    </Flex>
  );
}