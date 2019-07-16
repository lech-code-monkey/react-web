# 源码导读
### react
React 被描述为 “用于构建用户界面的 JavaScript 库”

- 如果您使用过诸如Angular、Vue这类MVVM模式的前端框架，那么react对您而言，也仅仅是小菜一碟而已。详细的对比可以参考[Angular vs. React vs. Vue](https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176)或百度之
- 详细可参考[react教程](https://react.docschina.org/)

### mobx
MobX 是一个经过战火洗礼的库，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。
MobX背后的哲学很简单:

任何源自应用状态的东西都应该自动地获得。

其中包括UI、数据序列化、服务器通讯，等等。

mobx借鉴了flux、redux的设计思想，将应用的状态和组件内状态进行了区分，将应用的公共状态汇聚到了一处统一管理，避免了组件之间的状态传递。
您仍然可以按照MVVM常规的利用组件间的数据绑定进行数据传递，也可以尝试使用mobxx，把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为。

- 可参考教程[mobx](https://cn.mobx.js.org/)

- ![mobx](https://cn.mobx.js.org/flow.png)

### react-router
使用react-router可以轻松的管理SPA页面路由。
- 可参考教程[react-router教程](https://react-guide.github.io/react-router-cn/)

### ant design
ant design是基于React开发的高质量UI组件库，对一些常用的组件诸如message/modal/tree/menu等做了封装，方便开发者快速生成自己的应用
- 可参考教程[ant design教程](https://ant.design/docs/)

## 工程结构概览
### 主要目录结构
nice management主要工程目录结构如下：
``` shell
|- 前端工程构建文件夹 config, script
  |- 诸如webpack、node脚本的配置文件

|- 生成脚本代码 build
  |- js 通过 npm run build 生成的目标js文件
  |- css 通过 npm run build 生成的目标css文件
  |- 静态文件放在pubilc中，打包过程自动copy

|- 工程开发目录 src
  |- index.js 页面入口

  |- components 组件
  
  |- pages 页面

  |- routes 前端路由

  |- stores 中心状态
    |- data 接口中间层（action），数据预处理，接口合并，数据调用计算、格式化
    |- **Store.jsx 页面状态管理
  
  |- styles 静态资源
    |- img 静态图片
    |- *.less 样式文件
```