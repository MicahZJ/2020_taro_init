# 2020_taro_init

## Taro安装说明

Taro 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

### CLI 工具安装

首先，你需要使用 npm 或者 yarn 全局安装`@tarojs/cli`，或者直接使用[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

:::caution 请注意
值得一提的是，如果安装过程出现`sass`相关的安装错误，请在安装 [mirror-config-china](https://www.npmjs.com/package/mirror-config-china) 后重试。

```bash
$ npm install -g mirror-config-china
```
:::

## 项目初始化

使用命令创建模板项目

```bash
$ taro init myApp
```

npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目

```bash
$ npx @tarojs/cli init myApp
```

![taro init myApp command screenshot](https://img30.360buyimg.com/ling/jfs/t1/121270/15/15083/672721/5f89357dEf36b7fe2/ecb98df1436cd3d5.jpg)

在创建完项目之后，Taro 会默认开始安装项目所需要的依赖，安装使用的工具按照 yarn>cnpm>npm 顺序进行检测，一般来说，依赖安装会比较顺利，但某些情况下可能会安装失败，这时候你可以在项目目录下自己使用安装命令进行安装

```bash
# 使用 yarn 安装依赖
$ yarn
# OR 使用 cnpm 安装依赖
$ cnpm install
# OR 使用 npm 安装依赖
$ npm install
```

进入项目目录开始开发，目前已经支持 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序、H5 等端的代码转换，针对不同端的启动以及预览、打包方式并不一致

## 运行

Taro 需要运行不同的命令，将 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。

![image](https://storage.360buyimg.com/taro-resource/platforms.jpg)

### 微信小程序

选择微信小程序模式，需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择项目根目录进行预览。

微信小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```bash
# yarn
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```

### 百度小程序

选择百度小程序模式，需要自行下载并打开[百度开发者工具](https://smartprogram.baidu.com/docs/develop/devtools/show_sur/)，然后在项目编译完后选择项目根目录下 `dist` 目录进行预览。

百度小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```bash
# yarn
$ yarn dev:swan
$ yarn build:swan
# npm script
$ npm run dev:swan
$ npm run build:swan
# 仅限全局安装
$ taro build --type swan --watch
$ taro build --type swan
# npx 用户也可以使用
$ npx taro build --type swan --watch
$ npx taro build --type swan
```

### 支付宝小程序

选择支付宝小程序模式，需要自行下载并打开[支付宝小程序开发者工具](https://docs.alipay.com/mini/developer/getting-started/)，然后在项目编译完后选择项目根目录下 `dist` 目录进行预览。

支付宝小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```bash
# yarn
$ yarn dev:alipay
$ yarn build:alipay
# npm script
$ npm run dev:alipay
$ npm run build:alipay
# 仅限全局安装
$ taro build --type alipay --watch
$ taro build --type alipay
# npx 用户也可以使用
$ npx taro build --type alipay --watch
$ npx taro build --type alipay
```

### 字节跳动小程序

选择字节跳动小程序模式，需要自行下载并打开[字节跳动小程序开发者工具](https://microapp.bytedance.com/docs/devtool/versionUpdate.html)，然后在项目编译完后选择项目根目录下 `dist` 目录进行预览。

字节跳动小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```bash
# yarn
$ yarn dev:tt
$ yarn build:tt
# npm script
$ npm run dev:tt
$ npm run build:tt
# 仅限全局安装
$ taro build --type tt --watch
$ taro build --type tt
# npx 用户也可以使用
$ npx taro build --type tt --watch
$ npx taro build --type tt
```

### QQ 小程序

选择 QQ 小程序模式，需要自行下载并打开[QQ 小程序开发者工具](https://q.qq.com/wiki/#_4-%E7%BC%96%E7%A0%81%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F)，然后在项目编译完后选择项目根目录下 `dist` 目录进行预览。

QQ 小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```bash
# yarn
$ yarn dev:qq
$ yarn build:qq
# npm script
$ npm run dev:qq
$ npm run build:qq
# 仅限全局安装
$ taro build --type qq --watch
$ taro build --type qq
# npx 用户也可以使用
$ npx taro build --type qq --watch
$ npx taro build --type qq
```

### 京东小程序

选择京东小程序模式，需要自行下载并打开京东小程序开发者工具（前往https://mp.jd.com 注册，申请成功后将会获得开发者工具），然后在项目编译完后选择项目根目录下 `dist` 目录进行预览。

京东小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）

```bash
# yarn
$ yarn dev:jd
$ yarn build:jd
# npm script
$ npm run dev:jd
$ npm run build:jd
# 仅限全局安装
$ taro build --type jd --watch
$ taro build --type jd
# npx 用户也可以使用
$ npx taro build --type jd --watch
$ npx taro build --type jd
```

### 京东小程序相关阅读

- [《使用 Taro 快速开发京东小程序》](/blog/2020-04-27-taro-build-jd)
- [《京东小程序 Taro 开发对比原生开发测评》](/blog/2020-04-27-taro-vs-jd)

## 常用 CLI 命令

### 查看 Taro 所有命令及帮助

```bash
$ taro --help
```

### 环境及依赖检测

Taro 提供了命令来一键检测 Taro 环境及依赖的版本等信息，方便大家查看项目的环境及依赖，排查环境问题。在提 issue 的时候，请附上 `taro info` 打印的信息，帮助开发人员快速定位问题。

``` bash
$ taro info
👽 Taro v3.0.7



  Taro CLI 3.0.7 environment info:
    System:
      OS: macOS High Sierra 10.13.6
      Shell: 5.3 - /bin/zsh
    Binaries:
      Node: 13.14.0 - ~/.nvm/versions/node/v13.14.0/bin/node
      Yarn: 1.22.4 - ~/.nvm/versions/node/v13.14.0/bin/yarn
      npm: 6.14.4 - ~/.nvm/versions/node/v13.14.0/bin/npm
    npmPackages:
      @tarojs/components: 1.3.27 => 1.3.27
      @tarojs/router: 1.3.27 => 1.3.27
      @tarojs/taro: 1.3.27 => 1.3.27
      @tarojs/taro-h5: 1.3.27 => 1.3.27
      @tarojs/webpack-runner: 1.3.27 => 1.3.27
      eslint-config-taro: 1.3.27 => 1.3.27
      eslint-plugin-taro: 1.3.27 => 1.3.27
      nerv-devtools: 1.5.5 => 1.5.5
      nervjs: 1.5.5 => 1.5.5

```

### Taro Doctor

Taro Doctor 就像一个医生一样，可以诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案。

但和真正的医生不一样，Taro Doctor 不需要排队挂号，也不用花钱。你只需要在终端运行命令：`taro doctor`，就像图里一样：

![Taro Doctor 诊断结果图](https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png)

### 快速创建新页面

Taro create --name [页面名称] 能够在当前项目的pages目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器。

### CLI 配置

> 自 `1.3.9` 开始支持

`1.3.9` 开始 Taro 会在用户根目录下创建 .taro 文件夹，其中 .taro/index.json 用于存放 CLI 相关配置。

开发者可以使用 `taro config` 命令对配置项进行一系列操作：

```bash
# 查看用法
$ taro config --help
# 设置配置项<key>的值为<value>
$ taro config set <key> <value>
# 读取配置项<key>
$ taro config get <key>
# 删除配置项<key>
$ taro config delete <key>
# 打印所有配置项
$ taro config list [--json]
```

## 其他常见问题

### Taro 多版本共存问题

很多开发曾经使用 Taro 旧版本开发过项目，已经在全局安装了 Taro，但是想同时体验到 Taro 3，应该如何进行操作？

我们提供了两种思路：

- 如果是需要新创建 Taro 3 项目，可以使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，通过安装不同 node 版本来安装不同版本的 Taro CLI，从而解决 Taro 多版本共存的问题
- 如果是部分已有项目需要升级到 Taro 3，可以在这些项目本地安装相应版本的 Taro CLI，这样通过 `yarn` 或者 `npm` 执行命令的话就会直接使用本地安装的 Taro CLI，安装方式 `yarn add @tarojs/cli`

### 回到某个版本

需要安装某个固定版本，或者回到某个版本，例如我们要安装 `1.3.9` ， 则如下：

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli@1.3.9
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli@1.3.9
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli@1.3.9
```

### 保持 `@tarojs/cli` 的版本与各端依赖版本一致

在使用 Taro 进行多端开发中，请保持 Taro CLI 的版本与你项目的依赖版本一致，否则可能会出现编译错误或者运行时错误。

如果你所使用的 Taro CLI 版本为 3.0.9，而项目里使用的依赖版本为 3.0.10，则有可能会出现问题，这时请将你的 Taro CLI 版本更新至项目依赖版本号相同的版本，如果还是出现问题，请向我们提出 [Issue](https://nervjs.github.io/taro-issue-helper/)。

## 配置taro ui
### 1.安装
`npm install taro-ui`
### 2.配置
引入所需组件
```
// page.js
import { AtButton } from 'taro-ui'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
```
P.S.因为要支持自定义主题功能，需要将样式从组件中抽离出来，在微信小程序中依赖 globalClass 功能，所以需要微信基础库版本在 v2.2.3 以上。

配置需要额外编译的源码模块
由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：
```
h5: {
  esnextModules: ['taro-ui']
}
```
### 3.编译并预览
进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用小程序预览模式，则需要自行下载并打开对应的小程序开发者工具，并选择预览项目根目录。

#### 3-1.微信小程序编译预览模式

### npm script
$ npm run dev:weapp
### 仅限全局安装
$ taro build --type weapp --watch
### npx用户也可以使用
$ npx taro build --type weapp --watch


#### 3-2.支付宝小程序编译预览模式

### npm script
$ npm run dev:alipay
### 仅限全局安装
$ taro build --type alipay --watch
### npx 用户也可以使用
$ npx taro build --type alipay --watch

#### 3-3.百度小程序编译预览模式

### npm script
$ npm run dev:swan
### 仅限全局安装
$ taro build --type swan --watch
### npx 用户也可以使用
$ npx taro build --type swan --watch

#### 3-4.H5 编译预览模式

### npm script
$ npm run dev:h5
### 仅限全局安装
$ taro build --type h5 --watch
### npx 用户也可以使用
$ npx taro build --type h5 --watch

## 配置mobx
### 下包
选择稳定版本
`npm i -S mobx@4.8.0 mobx-react@6.1.4`
### 配置mobx-1
在app.js页面配置
```
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
// 配置taro-ui全局引入一次即可 仅支持（微信/支付宝/百度/H5）
import 'taro-ui/dist/style/index.scss'

import { Provider } from 'mobx-react'
import AppStore from './store/index'

import './app.styl'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider {...AppStore}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App

```
### 配置mobx-2
这里我设置的是单个页面配置一个store，一个主页引入所有的子页面store
在src文件夹下新建store文件夹，并建立index.js
```
import IndexPage from '../pages/index/store';

class AppStore {
  constructor () {
    this.indexStore = new IndexPage(this);
  }
}

export default new AppStore()

```
子页面配置store
```
import { action, observable, computed, runInAction } from 'mobx';

export default class Store {
  constructor () {
  }

  @observable  overviewData = 1;

  @action
  increment() {
    this.overviewData++
  }

  @action
  decrement() {
    this.overviewData--
  }

  @action
  incrementAsync() {
    setTimeout(() => this.overviewData++, 1000)
  }
  // @computed get c () {
  // }

}

```
