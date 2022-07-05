import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
)
