'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

var FirstPage = require('./components/FirstPageComponent');

class _100DaysOfReactNative extends Component {

  render() {
    return (
      <Navigator
        style = {{flex: 1}}
        initialRoute = { new FirstRoute() }
        renderScene = { (route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} />
        }}
      />
    );
  }
}

class FirstRoute {

  constructor() {
    this.name = 'FirstPage';
    this.title = 'First Page';
    this.component = FirstPage;
  }
}

AppRegistry.registerComponent('_100DaysOfReactNative', () => _100DaysOfReactNative);
