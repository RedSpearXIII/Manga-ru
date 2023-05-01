import React, { ReactNode } from "react"
import { createPortal } from "react-dom"

type Props = {
  children: ReactNode
}
const Portal = ({ children }: Props) => {
  return <div>{createPortal(children, document.body)}</div>
}

export default Portal
