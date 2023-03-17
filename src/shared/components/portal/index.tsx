import React, { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode
}
const Portal: FC<PortalProps> = ({ children }) => {
  return <div>{createPortal(children, document.body)}</div>
}

export default Portal
