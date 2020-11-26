import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../screens/Home'
import ApplyPage from '../screens/ApplyPage';
import LoginPage from '../screens/LoginPage'
import TripInfoPage from '../screens/TripInfoPage'
import CreatePage from '../screens/CreatePage'



export default function Routes(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/apply_form/:id" component={ApplyPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/trip_info/:id" component={TripInfoPage} />
          <Route exact path="/create" component={CreatePage} />
        </Switch>
      </BrowserRouter>
    );
  };