import React, { Component } from 'react';
import { View, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';

UIManager.setLayoutAnimationEnabledExperimental(true);
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
