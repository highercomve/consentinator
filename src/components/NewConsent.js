import React from 'react'
import { connect } from 'react-redux'
import ConsentForm from './ConsentForm'
import { saveConsent } from '../actions/consent.actions'
import { LOADING_STATES } from '../reducers/consent.reducer'
import { withRouter } from 'react-router-dom'
import { BASE_URL } from '../constants'

const NewConsent = connect(
  (state) => ({
    loading: state.consents.loading === LOADING_STATES.saving
  }),
  { saveConsent }
)(({ history, saveConsent, loading }) => {
  const onSubmit = (e, data) => {
    saveConsent(data)
      .then(() => history.push(`${BASE_URL}/`))
  }
  return (
    <ConsentForm onSubmit={onSubmit} loading={loading} />
  )
})

export default withRouter(NewConsent)
