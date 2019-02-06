import * as ConsentService from '../services/consent.service'

export const TYPES = {
  FETCHING_CONSENTS: 'FEATCHING_CONSENTS',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  SAVING_CONSENTS: 'SAVING_CONSENTS',
  SAVE_CONSENT: 'SAVE_CONSENT',
  SAVE_SUCCESS: 'SAVE_SUCCESS',
  RESET_CONSENTS: 'RESET_CONSENTS',
  LOAD_CONSENTS: 'LOAD_CONSENTS'
}

export function getConsents ({ pageSize, page } = {}) {
  return (dispatch) => {
    dispatch({ type: TYPES.FETCHING_CONSENTS })
    return ConsentService.getConsents({ pageSize, page })
      .then(response => dispatch({ type: TYPES.LOAD_CONSENTS, payload: response }))
      .then(_ => dispatch({ type: TYPES.FETCH_SUCCESS }))
      .catch(error => dispatch({ type: TYPES.FETCH_ERROR, payload: error }))
  }
}

export function saveConsent (consentObj) {
  return (dispatch) => {
    dispatch({ type: TYPES.SAVING_CONSENTS })
    return ConsentService.saveConsent(consentObj)
      .then(response => dispatch({ type: TYPES.SAVE_CONSENT, payload: response }))
      .then(_ => dispatch({ type: TYPES.SAVE_SUCCESS }))
      .catch(error => dispatch({ type: TYPES.FETCH_ERROR, payload: error }))
  }
}
