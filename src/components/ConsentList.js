import React from 'react'
import ConsentItem from './ConsentItem'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

function ConsentList ({ consents, classes }) {
  return (
    <Paper className={classNames(classes.root, 'consent-list')}>
      <Table className={classes.table}>
        <TableHead className='consent-list__header'>
          <TableRow>
            <TableCell className='consent-list__name-label'>Name</TableCell>
            <TableCell className='consent-list__email-label'>Email</TableCell>
            <TableCell className='consent-list__agreements-label'>Consent given for</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consents.map(consent => <ConsentItem key={consent.id} {...consent} />)}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(ConsentList)