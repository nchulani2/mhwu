import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <Provider
        store={createStore(
          reducers,
          compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        )}>
        <App />
      </Provider>
    );
  }
}

render(
  <Router>
    <Index />
  </Router>,
  document.querySelector('#root')
);
