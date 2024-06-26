// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.org/swapi-graphql',
  cache: new InMemoryCache(),
});

export default client;