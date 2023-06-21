/**
 * @remark
 * @module
 */

/**
 * @throwable
 *
 */

const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return import.meta.env[key] || ""
}

export const API_URL = getEnvVar("VITE_REACT_APP_API_URL")
export const LIGHTBOX_LICENCE_KEY = getEnvVar("VITE_REACT_LIGHTBOX_LICENCE_KEY")

export const NODE_ENV = getEnvVar("MODE")

export const isDevEnv = getEnvVar("DEV")
export const isProdEnv = getEnvVar("PROD")
