import axios from 'axios';

import {
  Button,
  Flex
} from '@chakra-ui/react';

export const App = () => {
  const handleClick = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://digimon-api.vercel.app/api/digimon'
      });

      console.table( response.data );

      return response.data;
    }
    catch( error ) {
      console.log({ error })
    }
  }
  return (
    <Flex>
      <Button
        onClick={ () => handleClick() }
        variant='outline'
        colorScheme='gray'
      >
        Click Me
      </Button>
    </Flex>
  )
};