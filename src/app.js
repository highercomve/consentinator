import React, { useState } from 'react'
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

import ConsentList from './components/ConsentList'
import NewConsent from './components/NewConsent'

const ConnectedList = connect(
  (state) => ({ consents: state.consents.items })
)(ConsentList)

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

function AppNoStyle ({ classes }) {
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
            <MenuItem>
              <Link to='/'>Collected Consents</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/new-consent'>Give a consent</Link>
            </MenuItem>
          </MenuList>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path='/' component={ConnectedList} />
          <Route path='/new-consent' component={NewConsent} />
        </main>
      </section>
    </Router>
  )
}

export default withStyles(styles)(AppNoStyle)
