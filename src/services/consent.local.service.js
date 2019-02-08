import MockAdapter from 'axios-mock-adapter'
import Faker from 'faker'

const CONSENT_KEY = 'CONSENTS'

export function MockLocal (axios, delayResponse = 1) {
  const mock = new MockAdapter(axios, { delayResponse })
  const consents = localStorage.getItem(CONSENT_KEY) && localStorage.getItem(CONSENT_KEY) !== ''
    ? JSON.parse(localStorage.getItem(CONSENT_KEY))
    : []

  mock.onGet('/consents').reply((config) => {
    const page = config.params.page || 1
    const pageSize = config.params.pageSize || 10
    const startPoint = pageSize * (page - 1)
    const finishPoint = consents.length < pageSize * page ? undefined : (pageSize * page)
    const result = {
      items: consents.slice(startPoint, finishPoint),
      total: consents.length,
      pageSize,
      page
    }
    return [
      200,
      JSON.stringify(result)
    ]
  })
  mock.onPost('/consent').reply((config) => {
    const consent = JSON.parse(config.data)
    consent.id = Faker.random.uuid()
    consents.push(consent)
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consents))
    return [
      202,
      JSON.stringify(consent)
    ]
  })
}
