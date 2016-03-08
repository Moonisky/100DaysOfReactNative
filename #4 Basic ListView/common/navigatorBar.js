'use strict';
import React, {
  StyleSheet,
  View,
  Component,
  TouchableOpacity,
  Text,
} from 'react-native';

var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

class NavigatorBar extends Component {

  constructor(props) {
    super(props);

    this.title = this.props.title;
    this.eventEmitter = RCTDeviceEventEmitter;

    this.state = {
      leftButtonText: this.props.leftButtonText,    // 左边按钮标题
      rightButtonText: this.props.rightButtonText,   // 右边按钮标题
    };

    this.onPressLeft = this.props.onPressLeftButton;
    this.onPressRight = this.props.onPressRightButton;
  }

  componentWillReceiveProps(props) {
    this.setState({
      leftButtonText: props.leftButtonText,
      rightButtonText: props.rightButtonText,
    });
  }

  render() {
    return(
      <View style = {styles.header}>
        <TouchableOpacity
          onPress = {this.onPressLeft}
          style = {styles.navBarLeftButton}>
          <Text style = {[styles.navBarText, styles.navBarButtonText]}>
            {this.state.leftButtonText}
          </Text>
        </TouchableOpacity>
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
           {this.title}
        </Text>
        <TouchableOpacity
          onPress = {this.onPressRight}
          style = {styles.navBarRightButton}>
          <Text style = {[styles.navBarText, styles.navBarButtonText]}>
            {this.state.rightButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: '#F5FCFF',
  },
  navBarText: {
    paddingTop: 15,
    fontSize: 16,
    color: '#48BBEC'
  },
  navBarTitleText: {
    fontWeight: 'bold',
    marginVertical: 15,
  },
  navBarLeftButton: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  navBarRightButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#4169E1',
  },
});

module.exports = NavigatorBar;
