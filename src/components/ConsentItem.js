import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export default function ConsentItem ({ id, userName, userEmail, agreements }) {
  return (
    <TableRow className='consent-item' id={id}>
      <TableCell className='consent-item__name'>{userName}</TableCell>
      <TableCell className='consent-item__email'>{userEmail}</TableCell>
      <TableCell className='consent-item__aggrements'>
        {agreements.join(', ')}
      </TableCell>
    </TableRow>
  )
}
