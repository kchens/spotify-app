import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Search from './containers/search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  }
}

export default App;
