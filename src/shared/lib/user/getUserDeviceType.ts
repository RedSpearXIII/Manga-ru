export const getUserDeviceType = () => {
  const userAgent = window.navigator.userAgent

  if (/Mobi/i.test(userAgent)) {
    return "phone"
  } else if (/Tablet/i.test(userAgent)) {
    return "tablet"
  } else {
    return "desktop"
  }
}
