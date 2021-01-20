import Edit from "./views/Edit/Edit";
import Home from "./views/Home/Home";
import Add from "./views/Add/Add";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar } from "@material-ui/core";
import '../App.css'

function Routes() {
  return (
    <Router>
      <div>
        <AppBar position="sticky" style={{ backgroundColor: 'gray', height: 60, padding: 15 }}>
          <Link className="topmenu" to="/">Home</Link>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <Add name="edit" />
          </Route>
          <Route path="/edit">
            <Edit name="edit" />
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
