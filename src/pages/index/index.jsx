import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  clickHandler() {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: '/pages/confirm_data/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={() => this.clickHandler()}>Hello world!</Text>
      </View>
    )
  }
}
