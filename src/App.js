import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { fetchCurrentUser } from "./app/operations";
import "./App.css";

import HomePage from "./views/HomePage";
import ContactsPage from "./views/ContactsPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import { getIsLoggedIn } from "./app/selectors";
import { Container } from "@material-ui/core";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container className="container">
      <NavigationBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register">
          {!isLoggedIn ? <RegisterPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!isLoggedIn ? <LoginPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/contacts">
          {isLoggedIn ? <ContactsPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
