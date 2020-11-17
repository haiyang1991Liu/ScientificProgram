/*
 * @Author: @yzcheng
 * @Date: 2020-08-04 16:27:00
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:  公用Modal弹框组件
 * @LastEditTime: 2020-09-29 10:55:40
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.scss";
import { Button, Spin } from "antd";
export default class Modal extends Component {
  //初始化
  constructor(props) {
    super(props);
    this.state = {
      transform: "",
      visible: this.props.visible,
      loading: false,
      hide: true,
    };
    if (!this.node) {
      this.node = document.createElement("div");
      document.body.appendChild(this.node);
    }
  }
  //组件即将卸载时候删除dom节点
  componentWillUnmount() {
    this.node && this.node.remove();
    console.log(this)
  }
  onHide() {
    this.setState({
      hide: !this.state.hide,
    });
  }
  onClose() {
     this.setState({
       transform: "modal-out",
     });
      setTimeout(() => {
        this.setState({
          visible:false,
        });
      }, 300);
  }
  //监听状态执行动画
  UNSAFE_componentWillReceiveProps(nextProps) {
    let { visible, loading } = nextProps;
    this.setState({
      loading,
    });
    if (nextProps.visible) {
      this.setState({
        visible,
        transform: "",
      });
    } else {
      this.setState({
        transform: "modal-out",
      });
      setTimeout(() => {
        this.setState({
          visible,
        });
      }, 300);
    }
  }
  //渲染内容
  renderContent(loading) {
    const {
      title,
      children,
      className,
      okText,
      cancelText,
      onOk,
      onCancel,
      footer,
      sider,
      onClose,
    } = this.props;
    const { hide } = this.state;
    return (
      <div
        className={`modal-container ${sider ? "Sider_flow" : ""} ${className}`}
      >
        <div
          ref={(n) => {
            if (n && n.style) {
              setTimeout(() => {
                n.classList.add("modal-transform");
              }, 0);
            }
          }}
          className={`modal-body ${this.state.transform} ${hide ? "" : "hide"}`}
        >
          {onClose && <div className={"onclose"} onClick={onClose}></div>}
          {sider && (
            <div className={"modal-hide"} onClick={this.onHide.bind(this)} />
          )}
          {title ? <div className={"modal-title"}>{title}</div> : ""}
          <div className={"modal-content"}>
            {loading ? <Spin tip="请稍等"></Spin> : children}
          </div>
          {footer || footer === null ? (
            <div className={"modal-footer"}>{footer}</div>
          ) : (
            <div className={"modal-footer"}>
              <Button className={"cancel-btn"} onClick={onCancel}>
                {cancelText}
              </Button>
              <Button type="primary" className={"ok-btn"} onClick={onOk}>
                {okText}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
  render() {
    const { visible, loading } = this.state;
    if (visible) {
      return ReactDOM.createPortal(this.renderContent(loading), this.node);
    } else {
      return null;
    }
  }
}
// ts 约定规范 代码部分
Modal.propTypes = {
  visible: PropTypes.bool.isRequired, //控制显示隐藏
  loading: PropTypes.bool, //是否需要loading加载状态动画
  sider: PropTypes.bool, // 是否是侧边栏状态使用
  title: PropTypes.string, // 标题
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired, //内容
  className: PropTypes.string, //自定义class名
  footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]), //footer是否需要自己定义想要的  传入一个html结构
  onCancel: PropTypes.func, //取消按钮
  onClose: PropTypes.func, //取消按钮
  onOk: PropTypes.func, //ok按钮
  okText: PropTypes.string, //ok按钮文字
  cancelText: PropTypes.string, //取消按钮文字
};
//默认值
Modal.defaultProps = {
  className: "",
  onCancel: () => {},
  onOk: () => {},
  okText: "OK",
  cancelText: "Cancel",
};
