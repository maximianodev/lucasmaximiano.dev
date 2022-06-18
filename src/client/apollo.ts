import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
})

export { apolloClient }
