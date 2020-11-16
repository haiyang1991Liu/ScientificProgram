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
    console.log('=======================')
    console.log(error, errorInfo)
    console.log('=======================')
  }
  render() {
    let { hasError } =this.state
    if (hasError) {
      return <div>页面出错了</div>
    }
    return this.props.children
  }
}
