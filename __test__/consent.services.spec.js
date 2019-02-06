import * as ConsentService from '../src/services/consent.service'
import factoryConsent from './factories/consent.factory'

describe('Test offline functionality for Consent Service', () => {
  it('After set and consent get consents should return and array of consents', async () => {
    const consents = await ConsentService.getConsents()
    expect(consents.items.length).toBe(0)
  })

  it('Set consent should mark a set of consents for the user email', async () => {
    const consentData = factoryConsent()
    const consent = await ConsentService.saveConsent(consentData)
    expect(consent.id).toBeDefined()
    expect(consent.userEmail).toEqual(consentData.userEmail)
    expect(consent.userName).toEqual(consentData.userName)
    expect(consent.agreements).toEqual(consentData.agreements)
  })

  it('After set and consent get consents should return and array of consents', async () => {
    const consents = await ConsentService.getConsents()
    expect(consents.items.length).toBe(1)
  })

  describe('Pagination', () => {
    beforeAll(async () => {
      let i
      for (i = 0; i < 9; i++) {
        const consentData = factoryConsent()
        await ConsentService.saveConsent(consentData)
      }
    })

    it('Get items and page', async () => {
      const consentsPage = await ConsentService.getConsents({ pageSize: 2 })
      expect(consentsPage.items.length).toBe(2)
      expect(consentsPage.total).toBe(10)
      expect(consentsPage.pageSize).toBe(2)
      expect(consentsPage.page).toBe(1)
    })
  })
})
