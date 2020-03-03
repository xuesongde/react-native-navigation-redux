/**
 * @format
 * entry page
 */
import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  ActivityIndicator,
  AppRegistry,
  View,
  Text,
  Dimensions,
} from 'react-native';

import {name as appName} from './app.json';
import Router from './config/router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = function() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
