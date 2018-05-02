import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

// const store = new CreateStore();

export default class Kooy extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
