import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_API_URL,
      headers: {
        'X-Api-Key': import.meta.env.VITE_GRAPHQL_API_KEY
      }
    }),
    cache: new InMemoryCache()
  })
}

export const apolloClient = createApolloClient()
