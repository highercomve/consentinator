import store from '../src/store'
import factoryConsent from './factories/consent.factory'
import { TYPES, saveConsent, getConsents } from '../src/actions/consent.actions'
import { LOADING_STATES } from '../src/reducers/consent.reducer'

describe('Store spec', () => {
  it('When store load start with default state', () => {
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBeNull()
    expect(state.consents.error).toBeNull()
  })

  it('If dispatch action fetching consent loading should be true', () => {
    store.dispatch({ type: TYPES.FETCHING_CONSENTS })
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(LOADING_STATES.fetching)
    expect(state.consents.error).toBeNull()
  })

  it('If dispatch action saving consent loading should be', () => {
    store.dispatch({ type: TYPES.SAVING_CONSENTS })
    let state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(LOADING_STATES.saving)
    expect(state.consents.error).toBeNull()

    store.dispatch({ type: TYPES.SAVE_SUCCESS })
    state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(LOADING_STATES.default)
    expect(state.consents.error).toBeNull()
  })

  it('fetch error', () => {
    const error = new Error('Error loading consent')
    store.dispatch({ type: TYPES.FETCH_ERROR, payload: error })
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(LOADING_STATES.default)
    expect(state.consents.error).toEqual(error)
  })

  it('fetch success', () => {
    store.dispatch({ type: TYPES.FETCH_SUCCESS })
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(LOADING_STATES.default)
    expect(state.consents.error).toBeNull()
  })

  it('If dispatch action save consent, items should have new consents', () => {
    const consent = factoryConsent(true)
    store.dispatch({ type: TYPES.SAVE_CONSENT, payload: consent })
    const state = store.getState()
    expect(state.consents.items.length).toBe(1)
    expect(state.consents.items[0]).toEqual(consent)
    expect(state.consents.total).toBe(1)
    expect(state.consents.loading).toBe(LOADING_STATES.default)
    expect(state.consents.error).toBeNull()
  })

  describe('test service integration', () => {
    it('get consents from service', async () => {
      await store.dispatch(getConsents())
      const state = store.getState()
      expect(state.consents.items.length).toBe(0)
    })

    it('save consent in service', async () => {
      const consent = factoryConsent()
      await store.dispatch(saveConsent(consent))
      const state = store.getState()
      expect(state.consents.items.length).toBe(1)
      expect(state.consents.items[0].userName).toEqual(consent.userName)
      expect(state.consents.items[0].userEmail).toEqual(consent.userEmail)
      expect(state.consents.items[0].agreements).toEqual(consent.agreements)
      expect(state.consents.total).toBe(1)
    })
  })
})
