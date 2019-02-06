import * as ConsentService from '../src/services/consent.service'
import Faker from 'faker'

const posibleAgreements = ['newsletter', 'ads', 'statistics']

const getRandomArraySize = (size = 1, acc = [], elements = []) => {
  const elementToGet = Math.floor(Math.random() * elements.length)
  if (acc.length < size) {
    return getRandomArraySize(
      size,
      acc.push(elements[elementToGet]),
      [...elements.slice(0, elementToGet - 1), ...elements.slice(elementToGet)]
    )
  } else {
    return acc
  }
}
const randomAggrements = () => {
  const numberOfAgremments = Math.floor(Math.random() * posibleAgreements.length)
  return getRandomArraySize(numberOfAgremments, [], posibleAgreements)
}

const factoryConsent = () => {
  return {
    userEmail: Faker.internet.email(),
    userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    agreements: randomAggrements()
  }
}

describe('Test offline functionality for Consent Service', () => {
  it('After set and consent get consents should return and array of consents', async () => {
    const consents = await ConsentService.getConsents()
    expect(consents.length).toBe(0)
  })
  
  it('Set consent should mark a set of consents for the user email', async () => {
    const consentData = factoryConsent()
    const consent = await ConsentService.saveConsents(consentData)
    expect(consent.id).toBeDefined()
    expect(consent.userEmail).toEqual(consentData.userEmail)
    expect(consent.userName).toEqual(consentData.userName)
    expect(consent.agreements).toEqual(consentData.agreements)
  })

  it('After set and consent get consents should return and array of consents', async () => {
    const consents = await ConsentService.getConsents()
    expect(consents.length).toBe(1)
  })
})
