import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import pettakeGraphQLClient from '@Services/pettake-graphql-server/index.js';
import { AuthenticationProvider } from '@Features/user/AuthenticationContext.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={pettakeGraphQLClient}>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </ApolloProvider>
  </StrictMode>,
);
