'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

class _100DaysOfReactNative extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),  // 当前日期
    };
  }

  componentDidMount() {
    this.timer = setInterval(function () {
  	  this.setState({
  	  	 date: new Date()
  	  });
  	}.bind(this), 1000);
  }

  componentWillUnMount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    let date = this.state.date;

    return (
      <View style = {styles.container}>
        <Text style = {[styles.text, styles.title]}>
          当前的日期和时间：
        </Text>
        <Text style = {[styles.text, styles.date]}>
          {date.toLocaleDateString()}
        </Text>
        <Text style = {[styles.text, styles.date]}>
          {this.onGetTime(date)}
        </Text>
        <TouchableOpacity
          onPress = {this.onRefreshTime.bind(this)}>
          <Text style = {[styles.text, styles.button]}>
            刷新时间
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  onRefreshTime() {
    this.setState({
      date: new Date()
    })
  }

  onGetTime(date) {
    var string = '';
    string += date.getHours()>9 ? date.getHours().toString() : '0' + date.getHours();
    string += ':';
    string += date.getMinutes()>9 ? date.getMinutes().toString() : '0' + date.getMinutes();
    string += ':';
    string += date.getSeconds()>9 ? date.getSeconds().toString() : '0' + date.getSeconds();
    return string;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'HelveticaNeue-Light',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  date: {
    fontSize: 40,
  },
  button: {
    margin: 10,
    fontSize: 20,
    color: '#48BBEC'
  },
});

AppRegistry.registerComponent('_100DaysOfReactNative', () => _100DaysOfReactNative);
