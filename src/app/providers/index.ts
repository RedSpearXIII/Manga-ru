import compose from "compose-function"
import { withRouter } from "./with-router"
import { withReactQuery } from "./with-react-query"
import { withThemeDetector } from "./with-theme-detector"

export const withProviders = compose(
  withRouter,
  withReactQuery,
  withThemeDetector
)
