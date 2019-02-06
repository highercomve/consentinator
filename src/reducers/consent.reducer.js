import { TYPES } from '../actions/consent.actions'
/**
 * @typedef {loading: Boolean, items: Array, error?: Error} IState
 */

/**
 * @typedef {type: string, payload?:any} IAction
 */

export const LOADING_STATES = {
  default: null,
  fetching: 'fetching',
  saving: 'saving'
}

const defaultState = {
  loading: LOADING_STATES.default,
  items: [],
  pageSize: 2,
  page: 1,
  total: 0,
  error: null
}

/**
 * consent reducer
 * @param {IState} state
 * @param {IAction} action
 * @returns {IState}
 */
export default function consentReducer (state = defaultState, action) {
  switch (action.type) {
    case TYPES.FETCHING_CONSENTS:
      return {
        ...state,
        loading: LOADING_STATES.fetching
      }
    case TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: LOADING_STATES.default,
        error: action.payload
      }
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: LOADING_STATES.default,
        error: null
      }
    case TYPES.LOAD_CONSENTS:
      return {
        ...state,
        items: action.payload.items,
        pageSize: action.payload.pageSize,
        page: action.payload.page,
        total: action.payload.total
      }
    case TYPES.SAVE_CONSENT:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + 1
      }
    case TYPES.SAVING_CONSENTS:
      return {
        ...state,
        loading: LOADING_STATES.saving
      }
    case TYPES.SAVE_SUCCESS:
      return {
        ...state,
        loading: LOADING_STATES.default
      }
    case TYPES.RESET_CONSENTS:
      return defaultState
    default:
      return state
  }
}
