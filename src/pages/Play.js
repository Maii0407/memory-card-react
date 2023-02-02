import { useContext } from "react";

import { GlobalContext } from "../App";
import { PlayCards } from "../components/PlayCards";

import {
  Flex, Grid
} from "@chakra-ui/react"

export const PlayPage = () => {
  const { currentArray } = useContext( GlobalContext );

  return (
    <Flex
      direction='column'
      padding='10px'
    >
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