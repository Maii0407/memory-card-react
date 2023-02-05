import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

import { GlobalContext } from "./_app";

import {
  Flex,
  Button
} from "@chakra-ui/react";

export default function Home() {
  const {
    allDigimon, setAllDigimon,
    shuffleArray,
    refreshGame,
  } = useContext( GlobalContext );

  const router = useRouter();

  const fetchDigimonList = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://digimon-api.vercel.app/api/digimon'
      });

      return shuffleArray( response.data, setAllDigimon );
    }
    catch( error ) {
      console.log({ error })
    }
  };

  const onNewGame = () => {
    refreshGame();

    router.push( '/play' );
  };

  useEffect(() => {
    if( allDigimon.length === 0 ) {
      fetchDigimonList()
    }
    return;
  });

  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
    >

      <Button
        onClick={ () => onNewGame() }
        textStyle='pixel'
        variant='outline'
        colorScheme='green'
      >
        New Game
      </Button>

    </Flex>
  );
};