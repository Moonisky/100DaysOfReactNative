'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  TextInput,
  Text,
  SliderIOS,
  View
} from 'react-native';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMoney : 0,
      taxPercent : 0,
      inputText: '',
    };
  }

  render() {
    return (
      <View style = {styles.homePageContainer}>
        <TextInput style = {[styles.textInput, {marginTop: 100, marginRight: 10, textAlign: 'right'}]}
          keyboardType = 'numeric'
          placeholder = '￥0.00'
          placeholderTextColor = 'lightGray'
          clearButtonMode = 'while-editing'
          selectTextOnFocus = {true}
          onChangeText = {(inputText) => this.setState({inputText})}
          onSubmitEditing = {this.onCalculateMoney.bind(this)}
          value = {this.state.inputText}
        />
        <View style = {styles.flowRight}>
          <View style = {styles.placehoderView} />
          <Text style = {styles.number}>
            Tax Rate ({parseInt(this.state.taxPercent*100)}%)
          </Text>
          <Text style = {styles.number}>
            ￥{(this.state.currentMoney * this.state.taxPercent).toFixed(2)}
          </Text>
        </View>
        <View style = {styles.flowRight}>
          <View style = {styles.placehoderView} />
          <Text style = {styles.number}>
            Remain
          </Text>
          <Text style = {styles.number}>
            ￥{(this.state.currentMoney - (this.state.currentMoney * this.state.taxPercent).toFixed(2)).toFixed(2)}
          </Text>
        </View>
        <View style = {styles.flowRight}>
          <SliderIOS style = {styles.slider}
            disabled = {this.state.inputText == ''}
            onValueChange = {this.onSliderValueChange.bind(this)}
          />
        </View>
      </View>
    );
  }

  // Action
  onSliderValueChange(value) {
    console.log(value);
    this.setState({
      taxPercent: value
    });
  }

  onCalculateMoney() {
    var value = this.state.inputText.replace('￥', '');
    if(value == '') { return; }
    var text = '￥' + value;
    this.setState({
      inputText: text,
      currentMoney: value,
    });
  }
}

class _100DaysOfReactNative extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'Tax Calculator', component: HomePage, title: 'Tax Calculator' }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  view: {
    margin: 15,
    height: 40,
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  placehoderView: {
    flex: 1,
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    margin: 15,
  },
  number: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 13,
    margin: 10,
    textAlign: 'right',
    fontFamily: 'HelveticaNeue-Light',
  },
  textInput: {
    height: 50,
    margin: 5,
    fontSize: 50,
    fontFamily: 'HelveticaNeue-Light',
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
});

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

AppRegistry.registerComponent('_100DaysOfReactNative', () => _100DaysOfReactNative);
