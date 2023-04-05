export const createArrayQueryParam = (
  arrays: { paramName: string; array: string[] | null | undefined }[]
) => {
  const str = arrays
    .map((item) =>
      item.array?.map((value) => `${item.paramName}=${value}`).join("&")
    )
    .filter((el) => el !== "")
    .join("&")

  if (str.length === 0) return ""

  return "?" + str
}
