import React, { Component } from 'react'
import Taro from "@tarojs/taro";

import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react'
import { View, Text } from '@tarojs/components'
import './index.styl'

@inject('indexStore')
@observer
export default class Index extends Component {

  constructor (props) {
    super(props);
    this.store = props.indexStore
  }
  componentWillMount () {
    console.log('mobx', this.store.overviewData)
  }

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

  clickHandlerMobx() {
    this.store.increment()
    console.log('mobx增加', this.store.overviewData)
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={() => this.clickHandler()}>Hello world!</Text>
        <Text onClick={() => this.clickHandlerMobx()}>增加mobx!</Text>
      </View>
    )
  }
}

Index.propTypes = {
  indexStore: PropTypes.object,
};
