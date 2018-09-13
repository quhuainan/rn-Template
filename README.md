# rn-Template
rn 项目模版
为了快速开发rn项目而创建的模版项目。

### TypeScript
参考[官网](https://github.com/Microsoft/TypeScript-React-Native-Starter#typescript-react-native-starter) 配置好以后若提示找不到文件则需要重启vscode(大坑)

### react-native-vector-icons
[官网](https://github.com/oblador/react-native-vector-icons) 
- ios：1.react-native link react-native-vector-icons  2. 重新启动App,npm start && react-native run-ios
- android: 1.app/gradle 添加 ```apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"````


### CodePush
参考[中文github](https://github.com/Microsoft/code-push/blob/master/cli/README-cn.md)教程

###  LargeList 
[官网](https://bolan9999.github.io/react-native-largelist/#/GettingStart)
- 解决flatlist 在数据较多的情况下性能问题
- 封装下拉刷新，上拉加载
- 粘性头部

