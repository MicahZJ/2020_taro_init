import { Component } from 'react'

// 配置taro-ui全局引入一次即可 仅支持（微信/支付宝/百度/H5）
import 'taro-ui/dist/style/index.scss'
import './app.styl'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
