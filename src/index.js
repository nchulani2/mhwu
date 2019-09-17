import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);
