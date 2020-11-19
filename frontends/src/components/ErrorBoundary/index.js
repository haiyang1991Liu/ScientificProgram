/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:28
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-18 14:15:18
 */
import React, { PureComponent } from 'react'

export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props)
    console.log(state)
  }
  componentDidCatch(error, errorInfo) {
    console.group()
    console.log(error, errorInfo)
    console.groupEnd()
  }
  render() {
    let { hasError } =this.state
    if (hasError) {
      return <div>页面出错了</div>
    }
    return this.props.children
  }
}
