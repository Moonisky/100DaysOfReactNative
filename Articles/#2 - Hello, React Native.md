# Hello, React Native

我们仔细观察一下我们新建的工程，我们会发现两个 `JS` 文件，分别是 `index.ios.js` 文件和 `index.android.js` 文件。

顾名思义，`index.ios.js` 是针对 iOS 平台进行开发的程序入口文件，而 `index.android.js` 文件则是针对 Android 平台进行开发的程序入口文件。

##iOS

我们打开 `index.ios.js` 文件，会发现以下内容：

```javascript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';                                              // 1
import React, {  
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';                                     // 2

class Test extends Component {                             // 3
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({                         // 4
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Test', () => Test);          // 5
```

我们来慢慢分析这段代码：

### Javascript 严格模式

`use strict` 就是所谓的 **Javascript 严格模式**，它使得 Javascript 在更严格的条件下进行运行。使用严格模式，可以避免以下问题：

- 消除 Javascript 语法的一些不合理、不严谨的地方，减少一些非预期行为的发生。
- 阻止会导致代码运行安全的行为出现
- 提高编译器效率，增加运行速度

总之，严格模式应该是在 React Native 当中每一个 `js` 文件都应当有的，我们在每个文件的首部都不要忘了增加这个语句，这样就可以让整个文件都以严格模式运行，这样可以让 Javascript 工作得更好！

> 注意：如果这个语句不在第一行的话，那么是无效的。

如果对严格模式感兴趣的话，大家可以参考 [Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html) 这篇文章，以及 [ECMAScript 5 Strict Mode, JSON, and More](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/) 这篇文章。

###开发包导入

`import` 命令将从 `react-native` 位置中引入 React Native 的开发包，并导入需要用到的变量。这个类似于 Swift 以及 Java 的 `import` 语句。

这个命令主要是依据 `npm` 所安装的包来进行检索的，这些安装包基本上是位于 `{prefix}/lib/node_modules` 里面的，大家可以通过 `npm config ls` 来查看 prefix 的位置。

> 在此前，大家在别的教程中可能会发现以前的 React Native 引入包的范例是这么写的：
>
> ```javascript
> var React = require('react-native');
> var {
>   AppRegistry,
>   Component,
>   StyleSheet,
>   Text,
>   View
> } = React;
> ```
>
> `import` 语句是 ES6 推出的新语法，隶属于 `Module`（模块）功能。这个命令可以直接从相应的模块当中，加载使用 `export` 命令定义的对外接口。
>
> `import` 命令接受一个对象，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块对外接口的名称相同。
>
> 关于 `import` 命令的更多内容，大家可以查看 “[ECMAScript 入门-Module-import 命令](http://es6.ruanyifeng.com/#docs/module#import命令)”一节。

在这个导入过程中，我们主要导入了以下几个类：

* **AppRegistry**：这是 JS 运行所有 React Native 应用的入口，关于它的相关知识，我们会在后续部分进行介绍。

* **Component**：这是 React UI 的基础模块。在组件当中，包含了不可变的属性 (*props*)、可变的状态变量 (*states*) 以及暴露给渲染用的方法 (*render*)。我们可以这么认为，React Native 的核心就在于这一类类的组件当中。

  我们并不能简单地将 Component 视作 `UIKit` 或者 `Android.View` 之类的东西，它们只能说是在某种意义上是类似的。React Native 所做的，就是将 React 组件，转换为原生的 UI。

* **StyleSheet**：是一种提供类似 CSS 样式表的类，它可以将组件样式独立出来，从而简化代码，让代码清晰易懂。

###应用程序入口

用 `AppRegistry` 注册应用入口，这是功能是不可缺少的，否则的话应用就找不到入口，导致程序报错。要注意的是，第一个参数: `"Test"` 一定要是当前项目的名称，不要轻易进行变动，否则的话应用入口也是没有办法注册的。至于第二个参数，指向的是入口类，这个只要提供正确的入口类名字即可，没有什么特殊的要求。

> 在此前，React Native 创建类是这么创建的：
>
> ```javascript
> var Box = React.createClass({
>   render: function() {
>   	return (...);
>   }
> })
> ```
>
> 同样的，这也是 ES6 语法带来的新特性——**类 (class)** 的功劳。原本的传统方法是通过 React 提供的 `createClass` 构造函数来进行类的创建的，但是这种写法让很多开发人员面临着非常困扰的问题。因此，ES6 提供了 `class` 关键字来替代构造函数的功能，让语法更为清晰。
>
> 关于 `Class` 的更多内容，大家可以查看 [ECMAScript 入门-Class](http://es6.ruanyifeng.com/#docs/class) 一节。

###那么 Android 呢？

我们打开 `index.android.js` 文件可以发现，这两个文件里面的代码内容是一模一样！由此可见，React Native 强大的跨平台特性，我们只需要学习一次，就可以用基本相同的代码，在不同的平台上实现相同的功能即可。