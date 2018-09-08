import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from 'src/redux/configureStore';
import Navigator from './Navigator';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navigator/>
  </Provider>
);

export default App;
