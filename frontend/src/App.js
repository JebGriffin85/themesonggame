import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Browse from "./components/Browse";
import { Toolbar } from '@material-ui/core'

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} history={history} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact={true}>
            <LandingPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/browse" exact={true}>
            <Browse />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;