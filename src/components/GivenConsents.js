import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import ConsentList from './ConsentList'
import ListPagination from './ListPagination'
import { getConsents } from '../actions/consent.actions'

const ConnectedList = connect((state) => ({ consents: state.consents.items }))(ConsentList)
const ConnectPagination = connect(
  (state) => ({ ...state.consents }),
  { changePage: getConsents }
)(ListPagination)

function GivenConsentsNoStyle () {
  return (
    <Paper>
      <ConnectedList />
      <ConnectPagination />
    </Paper>
  )
}

export default withStyles()(GivenConsentsNoStyle)
