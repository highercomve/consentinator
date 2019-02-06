import axios from 'axios'

if (process.env.NODE_ENV !== 'production') {
  const { MockLocal } = require('./consent.local.service')
  MockLocal(axios)
}

export function getConsents (params = { pageSize: 10, page: 1 }) {
  return axios({
    method: 'GET',
    url: '/consents',
    params
  }).then(response => response.data)
}

export function saveConsents (consent) {
  return axios({
    method: 'POST',
    url: '/consent',
    data: consent
  }).then(response => response.data)
}
