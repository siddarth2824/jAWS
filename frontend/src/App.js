import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route
          path="/"
          render={({ location }) => (
            <Redirect
              to={{
                pathname: "/dashboard",
              }}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
