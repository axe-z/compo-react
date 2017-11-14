import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';

import  DashboardPage from '../components/DashboardPage.js'
// import  Ressource from '../components/Ressource.js'
// import RequireAuth from '../components/RequireAuth';

import Oups404 from '../components/Oups404.js'

//const WrappedComponent = RequireAuth(Ressource)


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={DashboardPage} />
      {/* <Route path="/ressource" component={WrappedComponent} /> */}
      <Route component={Oups404} />
    </Switch>
  </BrowserRouter>
)

 export default AppRouter
