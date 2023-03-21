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
    console.log(import.meta.env)
    throw new Error(`Env variable ${key} is required`)
  }
  return import.meta.env[key] || ""
}

export const API_URL = getEnvVar("VITE_REACT_APP_API_URL")

export const NODE_ENV = getEnvVar("MODE")

export const isDevEnv = getEnvVar("DEV")
export const isProdEnv = getEnvVar("PROD")
