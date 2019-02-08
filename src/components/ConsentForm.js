import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

const posibleAgreements = [
  { name: 'letters', value: 'Receive news letters' },
  { name: 'ads', value: 'Be show targeted ads' },
  { name: 'statistics', value: 'Contribute to anonymous visit statistics' }
]

export default function ConsentForm ({ onSubmit, loading }) {
  const [userName, setName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [agreements, setAgreements] = useState([])

  const checkboxChange = (e) => {
    if (e.target.checked) {
      setAgreements([...agreements, e.target.value])
    } else {
      const element = agreements.indexOf(e.target.value)
      setAgreements([...agreements.slice(0, element), ...agreements.slice(element + 1)])
    }
  }

  const Submit = (e) => {
    e.preventDefault()
    onSubmit(e, { userName, userEmail, agreements })
  }

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='flex-start' >
      <Grid
        item
        xs={12}
        sm={6} >
        <Typography variant='h6' gutterBottom>
          Create new consent
        </Typography>
        <form onSubmit={Submit}>
          <TextField
            required
            id='fullName'
            name='fullName'
            label='Full name'
            value={userName}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            autoComplete='name'
          />
          <TextField
            required
            type='email'
            id='email'
            name='email'
            label='Email'
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            autoComplete='email'
          />
          {posibleAgreements.map((a, index) => {
            return (
              <Grid key={index} item xs={12}>
                <FormControlLabel
                  control={<Checkbox onChange={checkboxChange} checked={agreements.includes(a.value)} color='secondary' name={a.name} value={a.value} />}
                  label={a.value} />
              </Grid>
            )
          })}
          <Button disabled={loading} type='submit' variant='contained' color='primary'>
            {loading ? 'Saving' : 'Save consent'}
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
