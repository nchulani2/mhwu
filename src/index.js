import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';

class Index extends Component {
  componentDidMount = () => {
    document.querySelector('.loader').classList.add('loader-hide');
  };
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

setTimeout(() => {
  ReactDOM.render(<Index />, document.querySelector('#root'));
}, 3500);