import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./User/Pages/Users";
import NewPages from "./Places/Pages/NewPages";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Users></Users>
        </Route>

        <Route path='/page/new' exact>
          <NewPages />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
