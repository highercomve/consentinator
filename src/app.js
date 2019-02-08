import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import GivenConsents from './components/GivenConsents'
import NewConsent from './components/NewConsent'
import { BASE_URL } from './constants'
import { getConsents } from './actions/consent.actions'

const drawerWidth = 240
const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
})

function AppNoStyle ({ classes, getConsents, consents }) {
  useEffect(() => {
    getConsents({ ...consents })
  }, [])
  return (
    <Router>
      <section className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' color='inherit'>
              Privacy Consent Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          anchor='left'
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <MenuList>
            <Link to={`${BASE_URL}/`}>
              <MenuItem>
                Collected Consents
              </MenuItem>
            </Link>
            <Link to={`${BASE_URL}/new-consent`}>
              <MenuItem>
                Give a consent
              </MenuItem>
            </Link>
          </MenuList>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path={`${BASE_URL}/`} component={GivenConsents} />
          <Route path={`${BASE_URL}/new-consent`} component={NewConsent} />
        </main>
      </section>
    </Router>
  )
}

const CAppNoStyle = connect(
  (state) => ({ consents: state.consents }),
  { getConsents }
)(AppNoStyle)

export default withStyles(styles)(CAppNoStyle)
