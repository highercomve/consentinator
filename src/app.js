import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Icon from '@material-ui/core/Icon'

import GivenConsents from './components/GivenConsents'
import NewConsent from './components/NewConsent'
import { BASE_URL } from './constants'
import { getConsents } from './actions/consent.actions'

const drawerWidth = 240
const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  link: {
    'textDecoration': 'none',
    color: theme.palette.primary.main,
    'fontFamily': theme.typography.fontFamily
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
})

function AppNoStyle ({ classes, getConsents, consents }) {
  const [open, toggleOpen] = useState(true)

  useEffect(() => {
    getConsents({ ...consents })
  }, [])
  return (
    <Router>
      <section className={classes.root}>
        <CssBaseline />
        <AppBar
          position='absolute'
          className={classNames(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={() => toggleOpen(!open)}
              className={classNames(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              className={classes.title}
            >
                Privacy Consent Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => toggleOpen(!open)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to={`${BASE_URL}/`} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Icon>list</Icon>
                </ListItemIcon>
                Collected Consents
              </ListItem>
            </Link>
            <Link to={`${BASE_URL}/new-consent`} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Icon>add_circle</Icon>
                </ListItemIcon>
                Give a consent
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
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
