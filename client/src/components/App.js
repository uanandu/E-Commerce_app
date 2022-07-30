import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

const App = () => {

return (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/">Welcome Page</Route>
      <Route exact path = "/shop">Shop Page</Route>
      <Route exact path = "/item/:itemId">Specific Item Page</Route>
      <Route exact path = "/checkout">Checkout Page</Route>
      <Route exact path = "/category/:categoryId">Specific Category Page</Route>
      <Route exact path = "/company/:companyId">Specific Company Page</Route>
      <Route exact path = "/previous-purchases">Previous Purchases</Route>
      <Route exact path = "/about-us">About Us</Route>
    </Switch>
  </BrowserRouter>
);
};

export default App;