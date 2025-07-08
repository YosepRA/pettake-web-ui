import { ApolloClient, InMemoryCache } from '@apollo/client';

const baseURL = import.meta.env.VITE_PETTAKE_GRAPHQL_SERVER_BASE_URL;

const apolloClientConfig = {
  uri: baseURL,
  cache: new InMemoryCache(),
  credentials: 'include',
};

const client = new ApolloClient(apolloClientConfig);

export default client;
