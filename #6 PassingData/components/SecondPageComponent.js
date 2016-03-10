'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class SecondPage extends Component {

  constructor(props) {
    super(props);
    this.passedValue = props.value;
  }

  render() {
    return (
        <Text style = {[styles.text, styles.title]}>
          {this.passedValue}
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'HelveticaNeue-Light',
    textAlign: 'center',
    color: 'black',
  },
  title: {
    fontSize: 40,
    margin: 80,
  },
});

module.exports = SecondPage;
