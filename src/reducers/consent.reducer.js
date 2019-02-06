/**
 * @typedef {loading: Boolean, items: Array, error?: Error} IState
 */

/**
 * @typedef {type: string, payload?:any} IAction
 */

const defaultState = {
  loading: false,
  items: [],
  error: null
}

/**
 * consent reducer
 * @param {IState} state
 * @param {IAction} action
 * @returns {IState}
 */
export default function consentReducer (state = defaultState, action) {
  return state
}
