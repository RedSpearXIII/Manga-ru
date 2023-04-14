import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { API_URL } from "~shared/config"

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

export const withApolloClient = (component: () => React.ReactNode) => {
  return () => <ApolloProvider client={client}>{component()}</ApolloProvider>
}
