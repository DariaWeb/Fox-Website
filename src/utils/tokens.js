export function getToken () {
  JSON.parse(localStorage.getItem('authToken'))
}

export const setToken = (val) => {
  localStorage.setItem('authToken', JSON.stringify(val))
}
