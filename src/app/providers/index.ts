import compose from "compose-function"
import { withRouter } from "./with-router"
import { withReactQuery } from "./with-react-query"
import { withThemeDetector } from "./with-theme-detector"
import { withApolloClient } from "./with-apollo-client"

export const withProviders = compose(
  withRouter,
  withApolloClient,
  withReactQuery,
  withThemeDetector
)
