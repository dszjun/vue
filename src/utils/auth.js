import Cookies from 'js-cookie'

const TokenKey = 'Auth-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token, { domain: process.env.COOKIE_DOMAIN })
}

export function removeToken () {
  return Cookies.remove(TokenKey, { domain: process.env.COOKIE_DOMAIN })
}
