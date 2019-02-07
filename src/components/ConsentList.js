import React from 'react'
import ConsentItem from './ConsentItem'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

function ConsentListNoStyle ({ consents }) {
  return (
    <Paper className='consent-list'>
      <Table>
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

export default withStyles()(ConsentListNoStyle)
