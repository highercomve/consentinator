import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'

function Agreement ({ name }) {
  return <section className='consent-agreement'>{name}</section>
}

function ConsentItemNoStyle ({ id, userName, userEmail, agreements }) {
  return (
    <TableRow className='consent-item' id={id}>
      <TableCell className='consent-item__name'>{userName}</TableCell>
      <TableCell className='consent-item__email'>{userEmail}</TableCell>
      <TableCell className='consent-item__aggrements'>
        {agreements.map((a, index) => <Agreement key={index} name={a} />)}
      </TableCell>
    </TableRow>
  )
}

export default withStyles()(ConsentItemNoStyle)
