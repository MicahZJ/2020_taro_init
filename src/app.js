import React, { Component } from 'react'
import Taro from '@tarojs/taro'
// 配置taro-ui全局引入一次即可 仅支持（微信/支付宝/百度/H5）
import 'taro-ui/dist/style/index.scss'

import { Provider } from 'mobx-react'
import AppStore from './store/index'

import './app.styl'

class App extends Component {

  // constructor (props) {
  //   super(props);
  // }

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
