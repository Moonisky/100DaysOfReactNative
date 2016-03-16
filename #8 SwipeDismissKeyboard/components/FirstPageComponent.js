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
var NavigatorBar = require('./../components/navigatorBar');

class FirstPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentWillMount() {
    this.swipeGestureHandler = {
      onMoveShouldSetResponder: () => true,
      onResponderMove: this.hideKeyboard.bind(this),
    }
  }

  render() {
    return (
      <View
      {...this.swipeGestureHandler}
      style = {styles.homePageContainer}>
        <NavigatorBar
          title = 'Swipe To Dismiss Keyboard'
          rightButtonImage = {require('./../resources/check.png')}
          onPressRightButton = {this.handleRight.bind(this)}>
        </NavigatorBar>
        <TextInput
          style = {styles.input}
          autoFocus = {true}
          multiline = {true}
          ref = 'textInput'
          onChangeText = {(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }

  // Handle Actions
  handleRight() {
    this.hideKeyboard();
  }

  hideKeyboard() {
    this.refs.textInput.blur();
  }
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
  },
  input: {
    margin: 20,
    height: 50,
  },
});

module.exports = FirstPage;
