import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const client = new QueryClient()
export const withReactQuery = (component: () => React.ReactNode) => {
  return () => (
    <QueryClientProvider client={client}>{component()}</QueryClientProvider>
  )
}
