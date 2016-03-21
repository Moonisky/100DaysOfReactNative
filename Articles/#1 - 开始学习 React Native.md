#开始学习 React Native

啥是 React Native 呢？

React Native 是 Facebook 在 [React.js Conf 2015](http://conf.reactjs.com/) 大会上推出的基于 JavaScript 的开源框架。

React Native 结合了 Web 应用和 Native 应用的优势，可以使用 JavaScript 来开发 iOS 和 Android 原生应用。在 JavaScript 中用 React 抽象操作系统原生的 UI 组件，代替 DOM 元素来渲染等。

它可以用于搭建跨平台的应用，提供和原生平台一般流畅的开发体验。也就是所谓的『学习一次即可随处编写』(Learn once, write anywhere) ——开发者只需学习一种语言就能轻易为任何平台高效地编写代码。

##为什么要用 React Native

* 跨平台
* 只需要学习一种语言：JavaScript
* 提升开发效率


* 无需等待漫长的编译时间
* UI 可以保证全是原生的，这就是为什么称为 `Native` 的原因
* 使用**状态 (state)** 来表达和构建应用。

……总之，光凭第一点，就值得您花费时间，来学习 React Native了！

##让我们开始吧

###需求

* 操作系统：使用 OS X，目前笔者使用的是 OS X 10.11.3

* 安装 [Homebrew](http://brew.sh/)

  > 如果没有安装 Homebrew 的话，在 Terminal 中输入以下命令：
  >
  > ```sh
  > /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  > ```


* 安装 [Node.js](https://nodejs.org/)

  > 如果没有安装 Node.js 的话，在 Terminal 中输入以下命令：
  >
  > ```sh
  > brew install node
  > ```
  >
  > Node.js 是 JavaScript 运行时，用来运行 JavaScript 代码。
* 安装 [watchman](https://facebook.github.io/watchman/docs/install.html)

  > 如果没有安装 watchman 的话，在 Terminal 中输入以下命令：
  >
  > ```sh
  > brew install watchman
  > ```
  >
  > 通过配置 watchman，React 可以在代码发生变化时，进行 UI 界面的实时重建，完成相关的重建功能。



* 安装 React Native CLI
  > 如果没有安装 React Native CLI 的话，在 Terminal 中输入以下命令：
  >
  > ```sh
  > npm install -g react-native-cli
  > ```
  >
  > 这将使用 Node 包管理器来抓取 CLI 工具，并且全局安装。


* 安装 [Xcode](https://developer.apple.com/xcode/downloads/) 7.0 以及以上版本。
* 如果要进行 Android 开发的话，那么还需要：
  * 安装最新版本的 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  * 安装最新稳定版本的 [Android Studio](http://www.android-studio.org)
  * 安装 Android SDK，在 Terminal 中输入以下命令：
    ```sh
    brew install android-sd
    ```

  * 向 `~/.bashrc`、`~/.bash_profile`文件中加入以下内容：

    ```sh
    export ANDROID_HOME=/usr/local/opt/android-sdk
    ```

  * 开启 Gradle Daemon 功能，在 Terminal 中输入以下命令：

    ```sh
    echo 'org.gradle.daemon=true' >> ~/.gradle/gradle.properties
    ```

  * 在 Terminal 当中输入 `android`，打开 Android SDK Manager，然后安装以下项目：

    * Android SDK Build-tools (23.0.1)
    * Android SDK Tools
    * Android SDK Platform-tools
    * Android 6.0 (API 23) - SDK Platform、Intel x86 Atom_64 System Image、Intel x86 Atom System Image
    * Local Maven repository for Support Libraries

  * 安装 [Genymotion](https://www.genymotion.com/) 和 [Virtual Box](https://www.virtualbox.org)


###新建一个工程

在 Terminal 中前往一个项目要存储的根目录，然后运行以下命令：

```sh
react-native init TestingProject
```

这样就完成了一个初始项目的创建，其中包含了创建和运行一个 React Native 应用所需的一切内容。

不过，在国内，由于众所周知的原因，这个命令运行的速度会非常非常慢。因为这个代码的过程是要去获取 React Native 的源码和依赖包，因此，为了加快开发速度，我建议大家去安装淘宝的 [cnpm](http://npm.taobao.org) 来解决这个问题：

* 首先通过 `npm` 来安装 `cpnm`

  ```sh
  npm install -g cnpm
  ```

* 然后前往 `/usr/local/lib/node_modules/react-native-cli/index.js` 文件，将其中的：

  ```javascript
  exec('npm install --save react-native', function(e, stdout, stderr) {
  ```

  修改为：

  ```javascript
  exec('cnpm install --save react-native', function(e, stdout, stderr) {
  ```

如果不想要使用 `cnpm` 的话，那么还可以将 `npm` 仓库替换为淘宝镜像：

```sh
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
```

如果不想每次创建新项目的时候都去下载最新的 React Native 代码的话，那么可以先指定好一个在自己电脑上已经安装好的 React Native 路径，然后使用 `cp` 命令替换掉上面这个命令即可。
> **注意**：在我们继续之前，我们需要进入文件夹下面的 `node_modules` 文件夹当中，这其中是 React Native 框架所在的地方。我们需要找到这个文件夹下面的 `babel\test` 文件夹和 `react-deep-force-update` 文件夹，分别将这两个文件夹下面的 `.babelrc` 文件删除掉，不然的话应用运行会报 `TransformError:` 错误。这是因为新版本的 React Native 采用了 ES6 语法，而旧有的 `Babel` 框架不适应这个语法工作，因此我们需要将缓存文件删除，让 React Native 对其进行重建。

下面，我们就要让这个示例 App 运行起来了。

###打开 iOS 工程

进入到 `iOS` 文件夹当中，双击 `Test.xcodeproj` 文件，这时候会自动打开 Xcode，我们选择合适的模拟器类型就可以开始运行了。单击 Run 按钮，或者直接使用快捷键 ⌘ + R 直接启动。

启动成功的界面如下所示：

![iOS RN Hello](https://raw.githubusercontent.com/SemperIdem/100DaysOfReactNative/master/Resources/Article%231-1%20iOS_HelloWorld.png)

###打开 Android 工程

在这里，我们使用的是 Genymotion 模拟器来替代原有的 Google 官方模拟器。

* 打开 Genymotion，然后选择一个模拟器设备，如图所示。

  ![Genymotion 界面](https://raw.githubusercontent.com/SemperIdem/100DaysOfReactNative/master/Resources/Article%231-2%20Genymotion_Select.png)


* 如果没有创建过模拟器设备的话，可以点击其中的 Add 按钮，选择一个合适版本、合适屏幕尺寸的模拟器，然后点击 Next。 ![选择模拟器](https://raw.githubusercontent.com/SemperIdem/100DaysOfReactNative/master/Resources/Article%231-3%20Genymotion_Add.png)


* 给这个模拟器输入一个合适的名字，然后点击 Next，Genymotion 就会开始相关的必要文件，下载完毕后，模拟器就成功创建了。

* 创建完模拟器之后，单击 Start 按钮，运行模拟器。

* 模拟器运行完毕之后，在 Terminal 中前往我们的项目目录，然后输入以下指令：

  ```sh
  react-native run-android
  ```

  第一次运行这个命令的时候，React Native 会下载适用于 Android 环境的必要文件，随后就可以成功启动了。界面如下所示： ![Android RN Hello](https://raw.githubusercontent.com/SemperIdem/100DaysOfReactNative/master/Resources/Article%231-4%20Android_HelloWorld.png)

### 包服务器

我们在运行模拟器的过程中，会发现 React Native 会先开启一个 Terminal。这就是所谓的 "包服务器 (Packager)"，它用来读取并构建 JSX 和 Javascript 代码，并且它还允许代码实时渲染，这样我们修改了 Javascript 文件的代码，就无需通过重新编译就可以看到实时修改过的代码了。

如果这个服务器没有启动的话，或者在应用运行过程中不小心被关掉的话，那么应用将不能被正常启动。这样的话，就应该在这个项目的根目录下，用 Terminal 输入以下命令：

```sh
npm start
```

----

至此，我们的 Hello React Native 程序已经成功的在两个平台上都实现了，下一篇文章我们将来分析一下代码架构。