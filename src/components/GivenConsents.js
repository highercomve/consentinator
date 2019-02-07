import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import ConsentList from './ConsentList'

const ConnectedList = connect((state) => ({ consents: state.consents.items }))(ConsentList)

function GivenConsentsNoStyle () {
  return (
    <Paper>
      <ConnectedList />
    </Paper>
  )
}

export default withStyles()(GivenConsentsNoStyle)
