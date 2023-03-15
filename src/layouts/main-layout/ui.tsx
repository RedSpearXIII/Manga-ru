import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../../widgets/header/ui"

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
