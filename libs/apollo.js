/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHQL_API_URI = `${process.env.GRAPH_URI}`;

export const client = (initialState) => new ApolloClient({
  uri: GRAPHQL_API_URI,
  cache: new InMemoryCache().restore(initialState || {}),
});

export const ignore = null;
