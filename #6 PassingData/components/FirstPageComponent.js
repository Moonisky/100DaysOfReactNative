'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
var SecondPage = require('./SecondPageComponent');

class FirstPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    let self = this;
    RCTDeviceEventEmitter.addListener('nextPress', function() {
      let params = {
        value: self.state.text,
      }
      let route = new SecondRoute(params);
      route.passedValue = self.state.text;
      self.props.navigator.push(route);
    })
  }

  render() {
    return (
      <View style = {styles.homePageContainer}>

        <TextInput
          style = {[styles.input, {marginTop: 60}]}
          onChangeText = {(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

class SecondRoute {

  constructor(params) {
    this.name = 'SecondPage';
    this.title = 'Second Page';
    this.component = SecondPage;
    this.params = params;
  }

  renderLeftButton(navigator) {
    return (
      <TouchableOpacity
        onPress = {() => navigator.pop()}
        style = {[styles.navBarLeftButton]}>
        <Text style = {[styles.navBarText, styles.navBarButtonText]}>
          Back
        </Text>
      </TouchableOpacity>
    );
  }

  renderRightButton(navigator) {
    return null;
  }
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    margin: 20,
    height: 50,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#48BBEC'
  },
  navBarButtonText: {
    color: '#4169E1',
  },
  navBarLeftButton: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
});

module.exports = FirstPage;
