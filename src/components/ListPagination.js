import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

export default function ListPagination ({ total, page, pageSize, changePage }) {
  const numberOfPages = Math.round(total / pageSize)
  const pages = Array.apply(null, { length: numberOfPages })
  return (
    <Paper>
      <Grid
        container
        direction='row'
        justify='space-between'
        spacing={0}
      >
        <Grid
          container
          justify='center'
          sm>
          <IconButton
            disabled={page === 1}
            color='primary'
            onClick={() => changePage({ pageSize, page: page - 1 })}
          >
            <Icon>arrow_back_ios</Icon>
          </IconButton>
        </Grid>
        <Grid
          container
          sm={10} 
          direction='row'
          justify='center'
          alignItems='center'
        >
          {pages.map((_, index) => {
            return (
              <Button
                key={index}
                color='primary'
                disabled={(index + 1 === page)}
                onClick={() => changePage({ pageSize, page: index + 1 })}
              >
                {index + 1}
              </Button>
            )
          })}
        </Grid>
        <Grid
          container
          justify='center'
          sm>
          <IconButton
            disabled={page === numberOfPages}
            color='primary'
            onClick={() => changePage({ pageSize, page: page + 1 })}
          >
            <Icon>arrow_forward_ios</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}
