import React, { Component } from "react";
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import { Provider  } from 'react-redux'
import configureStore from './store/configureCombineStore'; //store Redux
import DashboardPage from './components/DashboardPage.js';
import 'normalize.css/normalize.css';
import './style/styles.scss';


//import { addCharById } from './actions/charAction';

//DB execute connection
//import { firebase } from './firebase/firebase.js';





const store = configureStore();


let unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('state ->', state);
});


console.log( store.getState());


const wrapProvider = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(wrapProvider, document.getElementById('app'));
