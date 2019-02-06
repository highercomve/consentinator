import * as ConsentService from '../src/services/consent.service'
import factoryConsent from './factories/consent.factory'

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
