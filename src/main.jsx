import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import pettakeGraphQLClient from '@Services/pettake-graphql-server/index.js';
import { queryClient } from '@Services/pettake-rest-server/index.js';
import { AuthenticationProvider } from '@Features/user/AuthenticationContext.jsx';

import iconLibrary from '@Lib/fontawesome/index.js';
import mui from '@Styles/mui/index.js';

import App from './App.jsx';

import '@fontsource/roboto';
import '@fontsource/comfortaa/400.css';
import '@fontsource/comfortaa/700.css';
import 'swiper/css';

iconLibrary.start();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={pettakeGraphQLClient}>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <ThemeProvider theme={mui.theme}>
            <App />
          </ThemeProvider>
        </AuthenticationProvider>
      </QueryClientProvider>
    </ApolloProvider>
  </StrictMode>,
);
