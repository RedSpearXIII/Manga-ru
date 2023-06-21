import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

const ShikimoriInterceptor = () => {
  const { accessToken, refreshToken } = useParams()
  useEffect(() => {
    if (accessToken && refreshToken) {
    }
  }, [accessToken, refreshToken])

  return <div></div>
}

export default ShikimoriInterceptor
