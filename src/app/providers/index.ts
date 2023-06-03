import compose from "compose-function"
import { withRouter } from "./with-router"
import { withReactQuery } from "./with-react-query"
import { withResizeObserver } from "./with-resize-observer"
import { withViewerFetcher } from "./with-viewer-fetcher"

export const withProviders = compose(
  withRouter,
  withReactQuery,
  withViewerFetcher,
  withResizeObserver
)
