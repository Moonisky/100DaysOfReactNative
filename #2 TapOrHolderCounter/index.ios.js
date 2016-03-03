// 严格模式，在这个模式下 JavaScript 
// 将会采用严格的语法检查机制，避免一些语法缺陷
'use strict';
import React, {  // 相当于 using namespace
  AppRegistry,
  Component,
  Text,
  StyleSheet,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';  // 从该模块中导入相关库

// 类是在 ES6 中被引入的
// 继承自 Component（React UI 的基础模块）
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    };
  }

  render() {
    return (
      <View style={styles.homePageContainer}>
        <Text style={styles.number}>
          { this.state.counter }
        </Text>
        <TouchableHighlight style = {styles.button}
          underlayColor = '#99d9f4'
          onPress = {this.onTapPressed.bind(this)}
          onPressIn = {this.onTapPressIn.bind(this)}
          onPressOut = {this.onTapPressOut.bind(this)}>
          <Text style = {styles.buttonText}>点击</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.button}
          underlayColor = '#99d9f4'
          onPress = {this.onClean.bind(this)}>
          <Text style = {styles.buttonText}>清空</Text>
        </TouchableHighlight>
      </View>
    );
  }

  // Action
  onTapPressed() {
    var count = this.state.counter + 1;
    this.setState({
      counter: count
    });
    console.log('Current counter is ' + count);
  }

  onTapPressIn() {
  	console.log('Press In');
  	this.timer = setInterval(function () {
  	  var count = this.state.counter + 1;
  	  this.setState({
  	  	 counter: count
  	  });
  	}.bind(this), 100);
  }

  onTapPressOut() {
  	console.log('Press Out');
  	this.timer && clearInterval(this.timer);
  }

  onClean() {
    this.setState({
      counter: 0
    });
  }
}

class TapCounter extends Component {

  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'Tap Counter', component: HomePage, title: 'Tap Counter' }}
        style = {styles.container}
        renderScene = {(route, navigator) =>
          <HomePage title={route.title} navigator={navigator} />
        }
        navigationBar = {
          <Navigator.NavigationBar 
          routeMapper = {NavigationBarRouteMapper}
          style = {styles.navBar}
        />}
      />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton: function (route, navigator, index, navState) {
    return null;
  },

  RightButton: function (route, navigator, index, navState) {
    return null;
  },

  Title: function (route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
          {route.title}
      </Text>
    );
  },
}; 

// 这个定义了一个样式，使用 CSS 来进行定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  number: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    backgroundColor: '#48BBEC',
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
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
  navBarButtonText: {
    marginLeft: 15,
  },
});

// AppRegistry 定义了 App 的入口，并提供了根组件
AppRegistry.registerComponent('TapCounter', () => TapCounter);
