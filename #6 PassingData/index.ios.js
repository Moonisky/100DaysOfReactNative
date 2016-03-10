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
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

class _100DaysOfReactNative extends Component {

  static navigationBarMapper = {
    LeftButton: function (route, navigator, index, navState) {
      return route.renderLeftButton(navigator);
    },

    RightButton: function (route, navigator, index, navState) {
      return route.renderRightButton(navigator);
    },

    Title: function (route, navigator, index, navState) {
      return (
        <Text style={[navigatorStyles.navBarText, navigatorStyles.navBarTitleText]}>
            {route.title}
        </Text>
      );
    },
  };

  render() {
    return (
      <Navigator
        style = {{flex: 1}}
        initialRoute = { new FirstRoute() }
        renderScene = { (route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
        navigationBar = {
          <Navigator.NavigationBar
            style = {navigatorStyles.navBar}
            routeMapper = {_100DaysOfReactNative.navigationBarMapper}
          />
        }
      />
    );
  }
}

class FirstRoute {

  constructor() {
    this.name = 'FirstPage';
    this.title = 'First Page';
    this.component = FirstPage;
    this.eventEmitter = RCTDeviceEventEmitter;
  }

  renderLeftButton(navigator) {
    return null;
  }

  renderRightButton(navigator) {
    return (
      <TouchableOpacity
        onPress = {() => this.eventEmitter.emit('nextPress')}
        style = {[navigatorStyles.navBarRightButton]}>
        <Text style = {[navigatorStyles.navBarText, navigatorStyles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  }
}

const navigatorStyles = StyleSheet.create({
  navBar: {
    backgroundColor: '#F5FCFF',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#48BBEC'
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#48BBEC'
  },
  navBarButtonText: {
    color: '#4169E1',
  },
  navBarRightButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});

module.exports = navigatorStyles;

AppRegistry.registerComponent('_100DaysOfReactNative', () => _100DaysOfReactNative);
