import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import Tabs from './src/tabs';
import Store from './store';
import {Provider} from 'react-redux'

export default class App extends React.Component {


  render() {
    let store = new Store();

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
