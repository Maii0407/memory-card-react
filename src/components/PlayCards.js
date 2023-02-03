import { useContext } from "react";

import { GlobalContext } from "../App";

import {
  Flex,
  Image,
  Text,
  useToast
} from "@chakra-ui/react";

export const PlayCards = ({ data }) => {
  const { currentArray, setCurrentArray } = useContext( GlobalContext );
  const toast = useToast();

  const handleClick = () => {
    let newArr = [ ...currentArray ]
    //Fisher Yates algorithm for shuffling the digimon list array
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    setCurrentArray( newArr );

    toast({
      title: `${ data.name } +1`,
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true
    })
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