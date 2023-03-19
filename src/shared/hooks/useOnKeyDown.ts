import { useEffect } from "react"

const useOnKeyDown = (
  keyCode: number,
  action: (e: globalThis.KeyboardEvent) => void
) => {
  useEffect(() => {
    document.addEventListener("keydown", action)

    return () => {
      document.removeEventListener("keydown", action)
    }
  }, [])
}

export default useOnKeyDown
