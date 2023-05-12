import { useEffect } from "react"

export const useDisableScroll = (disable?: boolean) => {
  useEffect(() => {
    document.body.style.overflowY = disable ? "hidden" : "auto"
  }, [disable])
}
