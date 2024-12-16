'use client';

import { PropsWithChildren } from 'react';
import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

const client = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
    fetchOptions: {
      cache: 'no-store',
    },
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export const ApolloWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <ApolloNextAppProvider makeClient={client}>{children}</ApolloNextAppProvider>;
};
