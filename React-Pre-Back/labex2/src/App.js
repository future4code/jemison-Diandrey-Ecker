import React from 'react'
import { GlobalStyle } from './GlobalStyle';
import { Router } from './router/Router';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/Theme'

export const App = () => {

  return (

    <body>
      <div>
        <ChakraProvider theme={theme}>
          <Router />
          <GlobalStyle />
        </ChakraProvider>
      </div>
    </body>

  );
}