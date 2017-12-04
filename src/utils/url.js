const getURL = (baseUrl, params = {}) => {
  let url = baseUrl + '?'
  Object.keys(params).map((key) => {
    if (url !== baseUrl + '?') {
      url += '&'
    }
    url += `${key}=${encodeURIComponent(params[key])}`
  })
  return url
}

export { getURL }