import store from '../src/store'
import factoryConsent from './factories/consent.factory'
import { TYPES } from '../src/actions/consent.actions'

describe('Store spec', () => {
  it('When store load start with default state', () => {
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(false)
    expect(state.consents.error).toBeNull()
  })

  it('If dispatch action fetching consent loading should be true', () => {
    store.dispatch({ type: TYPES.FETCHING_CONSENTS })
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(true)
    expect(state.consents.error).toBeNull()
  })

  it('fetch error', () => {
    const error = new Error('Error loading consent')
    store.dispatch({ type: TYPES.FETCH_ERROR, payload: error })
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(false)
    expect(state.consents.error).toEqual(error)
  })

  it('fetch success', () => {
    store.dispatch({ type: TYPES.FETCH_SUCCESS })
    const state = store.getState()
    expect(state.consents.items.length).toBe(0)
    expect(state.consents.loading).toBe(false)
    expect(state.consents.error).toBeNull()
  })

  it('If dispatch action save consent, items should have new consents', () => {
    const consent = factoryConsent(true)
    store.dispatch({ type: TYPES.SAVE_CONSENT, payload: consent })
    const state = store.getState()
    expect(state.consents.items.length).toBe(1)
    expect(state.consent.items[0]).toEqual(consent)
    expect(state.consents.loading).toBe(false)
    expect(state.consents.error).toBeNull()
  })
})
