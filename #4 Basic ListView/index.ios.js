'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  ListView,
  Text,
  View,
  Alert,
  AlertIOS,
} from 'react-native';

var NavigatorBar = require('./common/navigatorBar');

class _100DaysOfReactNative extends Component {

  constructor(props) {
    super(props);

    let initData = ['Objective-C', 'Swift']; // 初始化数据
    let source = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  // 初始化数据源

    this.addResponse = this.addResponse.bind(this);

    this.state = {
      tableData: initData,      // 当前表格数据
      dataSource: source.cloneWithRows(initData),  // 数据源
      previousData: initData,   // 先前存储的数据
      isEditable: false,        // 是否处于编辑状态，可编辑为 true
      leftButtonText: '编辑',    // 左边按钮文本
      rightButtonText: '新增',   // 右边按钮文本
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <NavigatorBar
          title = '编程语言列表'
          leftButtonText = {this.state.leftButtonText}
          rightButtonText = {this.state.rightButtonText}
          onPressLeftButton = {this.handleLeft.bind(this)}
          onPressRightButton = {this.handleRight.bind(this)}>
        </NavigatorBar>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow.bind(this)}
        />
      </View>
    );
  }

  renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight
        onPress = {() => this.pressRow(rowID)}
        onLongPress = {() => this.handleLongPress(rowID)}
        underlayColor = 'lightgray'>
        <View>
          <Text style = {styles.cellText}>{rowData}</Text>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  pressRow(rowID) {
    let currentData = this.state.tableData[rowID];
    console.log('点击第' + rowID + '行，数据为' + currentData);

    if(!this.state.isEditable) { return; }               // 如果不处于编辑态则退出

    let editResponse = this.editResponse.bind(this, rowID);
    AlertIOS.prompt('请修改当前数据：', currentData, [{
        text: '取消',
        style: 'cancel',
      }, {
        text: '确定',
        onPress: editResponse,
      }]
    );
  }

  // 处理数据响应

  addResponse(promptValue) {
    var source = this.state.dataSource;
    var data = this.state.tableData;
    data.push(promptValue);
    this.setState({
      tableData: data,
      dataSource: source.cloneWithRows(data),
      previousData: data,
    });
  }

  editResponse(rowID, promptValue) {
    // Do this to make sure the dataSource can always be modified.
    var newData = [];
    newData = this.state.tableData.slice();

    console.log('修改前的数据：' + newData[rowID]);
    newData[rowID] = promptValue;
    console.log('修改后的数据：' + newData[rowID]);

    this.setState({
      tableData: newData,
      dataSource: this.state.dataSource.cloneWithRows(newData),
    });
  }

  deleteResponse(rowID) {
    var newData = [];
    newData = this.state.tableData.slice();
    let deleData = newData.splice(rowID, 1);

    console.log('要删除的数据为：' + deleData);
    console.log('剩余的数据为：' + newData);
    this.setState({
      tableData: newData,
      dataSource: this.state.dataSource.cloneWithRows(newData),
    });
  }

  // 处理动作

  handleLongPress(rowID) {
    if(!this.state.isEditable) { return; }

    Alert.alert('确认要删除此条数据吗？',
      '数据删除后将不可恢复',
      [
        {text: '取消', style: 'cancel'},
        {text: '确定', style: 'destructive', onPress: () => this.deleteResponse(rowID)},
      ]
    );
  }

  handleLeft() {
    let editable = !this.state.isEditable;
    this.setState({ isEditable: editable });
    if(editable) {
      console.log('点击编辑');
      this.setState({
         leftButtonText: '取消',
         rightButtonText: '确定',
      });
    } else {
      console.log('点击取消');
      var source = this.state.dataSource;
      let previousData = this.state.previousData;
      this.setState({
        tableData: previousData,
        dataSource: source.cloneWithRows(previousData),
        leftButtonText: '编辑',
        rightButtonText: '新增',
      });
    }
  }

  handleRight() {
    let editable = this.state.isEditable;
    if(editable) {
      console.log('点击确定');
      this.setState({
        isEditable: false,
        previousData: this.state.tableData,
        leftButtonText: '编辑',
        rightButtonText: '新增',
      })
    } else {
      // 新增
      console.log('点击添加');
      let response = this.addResponse;
      AlertIOS.prompt('请输入一个新的编程语言：', null, [{
        text: '取消',
        style: 'cancel',
      }, {
        text: '确定',
        onPress: response,
      }],
        'plain-text'
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
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

AppRegistry.registerComponent('_100DaysOfReactNative', () => _100DaysOfReactNative);
