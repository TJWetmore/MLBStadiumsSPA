import React from 'react';
import ReactDOM from 'react-dom';
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import App from './App';



const theme = extendTheme({
  colors: {
    'darkBlue' : '#1b365d', 
    'lightBlue': '#2272d3', 
    'yellow': '#ffd500', 
    'black': '#000000', 
    'white': '#ffffff',
    'grey' : '#d3d3d3'
  },
})



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

