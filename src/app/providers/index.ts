import compose from "compose-function"
import { withRouter } from "./with-router"
import { withReactQuery } from "./with-react-query"

export const withProviders = compose(withRouter, withReactQuery)
