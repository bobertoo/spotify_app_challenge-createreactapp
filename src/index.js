import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'
import Landing from './components/landing';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
  < Provider store={ store }>
    <Landing />
  < /Provider >,
  document.getElementById('root')
)
