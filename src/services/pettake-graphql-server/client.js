import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClientConfig = {
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
};

const client = new ApolloClient(apolloClientConfig);

export default client;
