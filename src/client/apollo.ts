import { ApolloClient, InMemoryCache } from '@apollo/client'

const clientApollo = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckndvc13kzjx801w70id77wj3/master',
  cache: new InMemoryCache(),
})

export { clientApollo }
