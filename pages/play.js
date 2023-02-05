import { useContext, useEffect } from "react";

import { GlobalContext } from "./_app";
import { PlayCards } from "@/components/PlayCards";
import { GameOverScreen } from "@/components/GameOver";
import { NextLevelScreen } from "@/components/NextLevel";
import { WinScreen } from "@/components/Win";

import {
  Flex,
  Grid,
  Text
} from "@chakra-ui/react"

export default function Play() {
  const {
    allDigimon,
    currentArray,
    clickedArray,
    gameOver,
    nextLevel, setNextLevel,
    win, setWin,
    currentLevel, setCurrentLevel,
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
        marginBottom='20px'
      >
        { `Level ${ currentLevel }` }
      </Text>
      <Grid
        gridTemplateColumns={{ base: 'repeat( 2, 1fr )', lg: 'repeat( 4, 1fr )' }}
        gridGap={{ base: '10px', lg: '25px'}}
        padding='0 20px'
      >
        {
          currentArray.map(( digimonData ) => {
            return <PlayCards key={ digimonData.name } data={ digimonData } />
          })
        }
      </Grid>
      
      {
        gameOver ? <GameOverScreen />
        : nextLevel ? <NextLevelScreen />
        : win ? <WinScreen />
        : null
      }

    </Flex>
  )
}