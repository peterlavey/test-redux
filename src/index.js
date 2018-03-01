import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import foodReducer from './reducers/foodReducer';

//TODO: Separar initial state, middleware y store en archivos separados
const initialState = {
    created: false,
    categories: []
};

const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(foodReducer, initialState, middleware);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();
