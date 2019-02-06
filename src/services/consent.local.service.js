import MockAdapter from 'axios-mock-adapter'
import Faker from 'faker'

const CONSENT_KEY = CONSENT_KEY

export function MockLocal (axios, delayResponse = 10) {
  const mock = new MockAdapter(axios, { delayResponse })
  const consents = localStorage.getItem(CONSENT_KEY) && localStorage.getItem(CONSENT_KEY) !== ''
    ? JSON.parse(localStorage.getItem(CONSENT_KEY))
    : []

  mock.onGet('/consents').reply(200, consents)
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
