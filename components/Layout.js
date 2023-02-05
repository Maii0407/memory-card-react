import { useContext } from "react";

import { GlobalContext } from "@/pages/_app";

import {
  Flex,
  Text
} from "@chakra-ui/react";

export const Layout = ({ children }) => {
  const { highscore } = useContext( GlobalContext );

  return (
    <Flex
      direction='column'
      gap='25px'
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ lg: 'center' }}
        gap='10px'
        backgroundColor='gray.500'
      >
        <Text
          textStyle='pixel'
          padding='10px'
          color='gray.900'
        >
          DigiMatch
        </Text>
        <Text
          textStyle='pixel'
          textAlign='center'
          border='5px solid'
          borderColor='gray.500'
          fontSize='15px'
          padding='10px'
          backgroundColor='gray.900'
        >
          { `Highscore: Level ${ highscore }` }
        </Text>
      </Flex>
      { children }
    </Flex>
  )
}