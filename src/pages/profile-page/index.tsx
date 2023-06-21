import React from "react"
import { Outlet } from "react-router-dom"
import { Banner, ProfileTabs } from "./ui"
const ProfilePage = () => {
  return (
    <div>
      <Banner />
      <ProfileTabs />
      <div className={"container mx-auto"}>
        <Outlet />
      </div>
    </div>
  )
}

export default ProfilePage
