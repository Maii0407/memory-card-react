import { useContext, useEffect } from "react";

import { GlobalContext } from "../App";
import { PlayCards } from "../components/PlayCards";

import {
  Flex,
  Grid,
  Text
} from "@chakra-ui/react"

export const PlayPage = () => {
  const {
    currentArray,
    clickedArray,
    setNextLevel,
    currentLevel,
    setCurrentLevel,
    allDigimon,
    setWin
  } = useContext( GlobalContext );

  useEffect(() => {
    let winCondition = currentArray.length === clickedArray.length;

    //below is winning all levels win condition
    let fullDigimonList = currentArray.length === allDigimon.length;
    let fullDigimonClicked = clickedArray.length === allDigimon.length;

    if( winCondition ) {
      setCurrentLevel( currentLevel + 1 );
      setNextLevel( true );
    }
    if( fullDigimonList && fullDigimonClicked ) {
      setWin( true );
    }

    return;
  }, [ currentArray, clickedArray ]);

  return (
    <Flex
      direction='column'
      padding='10px'
    >
      <Text
        textStyle='pixel'
        textAlign='center'
        margin='20px 0'
      >
        { `Level ${ currentLevel }` }
      </Text>
      <Grid
        gridTemplateColumns='repeat( 2, 1fr )'
        gridGap='10px'
      >
        {
          currentArray.map(( digimonData ) => {
            return <PlayCards key={ digimonData.name } data={ digimonData } />
          })
        }
      </Grid>
    </Flex>
  )
}