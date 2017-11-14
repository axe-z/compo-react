///COMBINE ET CREER LE STORE

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import reducers

//import de middleware perso :
import asyncFetchMiddleware from '../middleware/asyncFetchMiddleware.js'
import log from '../middleware/log.js'

import authReducer from '../reducers/authReducer';

import UserReducer from '../reducers/UserReducer';
//import {CaracterReducer, heroReducer} from '../reducers/char'
//import {repasReducer, repasPrefereReducer } from '../reducers/repasReducer';
//import { memesReducer} from '../reducers/memesReducer';
//import loginReducer from '../reducers/loginReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({

      auth: authReducer,
      users: UserReducer
      // car: CaracterReducer, hero: heroReducer, repas: repasReducer, prefere: repasPrefereReducer, memes: memesReducer
    //  login: loginReducer
  }),
    composeEnhancers(applyMiddleware(thunk,asyncFetchMiddleware,log))
  );

  return store;
};
