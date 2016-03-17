'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
  RefreshControl,
} from 'react-native';

var NavigatorBar = require('./../components/navigatorBar');

class FirstPage extends Component {

  constructor(props) {
    super(props);

    let initData = ['0'];
    let source = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      currentData: initData,
      dataSource: source.cloneWithRows(initData),
      isRefreshing: false,
    };
  }

  render() {
    return (
      <View style = {styles.homePageContainer}>
        <NavigatorBar
          title = 'Refresh'
          rightButtonImage = {require('./../resources/check.png')}>
        </NavigatorBar>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow.bind(this)}
          refreshControl = {
            <RefreshControl
            refreshing = {this.state.isRefreshing}
            onRefresh = {this.onRefresh.bind(this)}
            tintColor = '#fff000'
            title = 'Loading Data...'
            colors = {['#fff000','#000fff']}
            />
          }
        />
      </View>
    );
  }

  renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight
        underlayColor = 'lightgray'>
        <View>
          <Text style = {styles.cellText}>{rowData}</Text>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  onRefresh() {
    this.setState({
      isRefreshing: true,
    });
    setTimeout(() => {
      let data = this.state.currentData;
      console.log(data);
      let lastData = parseInt(data[data.length - 1]) + 1;
      console.log(lastData);
      data.push(lastData);
      this.setState({
        isRefreshing: false,
        currentData: data,
        dataSource: this.state.dataSource.cloneWithRows(data),
      });
    }, 2000);
  }
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
  },
  cellText: {
    marginLeft: 15,
    fontSize: 15,
    marginVertical: 10,
  },
  separator: {
    marginLeft: 15,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

module.exports = FirstPage;
