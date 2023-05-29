import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { SuspensePageLoader } from "~shared/components"

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<SuspensePageLoader />}>{component()}</Suspense>
    </BrowserRouter>
  )
