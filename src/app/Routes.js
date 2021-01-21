import Edit from "./views/Edit/Edit";
import Home from "./views/Home/Home";
import Add from "./views/Add/Add";
import HomeHeadless from './views/HomeHeadless/Homeheadless';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar } from "@material-ui/core";
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Routes() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Link style={{ color: 'white' }} className="topmenu" to="/">Home</Link>
              <Link style={{ color: 'white', marginLeft: 20 }} className="topmenu" to="/homeheadless">Home 2</Link>
            </Toolbar>
          </AppBar>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <Add name="edit" />
          </Route>
          <Route path="/edit">
            <Edit name="edit" />
          </Route>
          <Route path="/homeheadless">
            <HomeHeadless name="HomeHeadLess" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
