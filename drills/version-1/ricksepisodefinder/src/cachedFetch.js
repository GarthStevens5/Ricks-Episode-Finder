function cachedFetch(url, options={}) {
  const data = localStorage.getItem(url)
  if (data) {
    return Promise.resolve(JSON.parse(data))
  }
  
  return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem(url, JSON.stringify(data))
        return data
      })
}

export default cachedFetch