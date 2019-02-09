import axios from 'axios'

const baseConfig = process.env.API_BASE_URL
  ? { baseUrl: process.env.API_BASE_URL }
  : {}

if (process.env.ENV !== 'production') {
  const { MockLocal } = require('./consent.local.service')
  MockLocal(axios)
}

export function getConsents (params = { pageSize: 10, page: 1 }) {
  return axios({
    ...baseConfig,
    method: 'GET',
    url: '/consents',
    params
  }).then(response => response.data)
}

export function saveConsent (consent) {
  return axios({
    ...baseConfig,
    method: 'POST',
    url: '/consent',
    data: consent
  }).then(response => response.data)
}
