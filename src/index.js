import '@fontsource/press-start-2p';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { App } from './App';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'white',
        // fontFamily: `'Press Start 2P', cursive`
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme } >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);