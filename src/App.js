import React from "react";
import { Switch, Route } from "react-router-dom";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactsList from "./components/ContactsList/ContactsList";
// import Filter from "./components/Filter/Filter";
import "./App.css";

import HomePage from "./views/HomePage";
import ContactsPage from "./views/ContactsPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => (
  <div className="container">
    <NavigationBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/contacts" component={ContactsPage} />
    </Switch>

    {/* <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactsList /> */}
  </div>
);

export default App;
