import { SyntheticEvent, useState } from "react"

export const useImageLoading = (): {
  isLoaded: boolean
  isError: boolean
  onLoad: (e: SyntheticEvent<HTMLImageElement, Event>) => void
  onError: (e: SyntheticEvent<HTMLImageElement, Event>) => void
} => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const onLoad = () => {
    setIsLoaded(true)
  }
  const onError = () => {
    setIsError(true)
  }

  return { isLoaded, isError, onLoad, onError }
}
