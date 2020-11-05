/*
 * @Author: @yzcheng
 * @Date: 2020-08-04 16:27:00
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:   登陆界面
 * @LastEditTime: 2020-08-20 11:17:54
 */
import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "dva";
import { JSEncrypt, RSA_PUBLIC_KEY } from "@utils/jsencrypt";
import styles from "./index.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 14,
  },
};

class index extends Component {
  formRef = React.createRef();
  constructor(prosp) {
    super(prosp);
    this.state = {
      t: new Date().getTime(),
    };
  }
  /**
   * 登陆提交方法
   */
  onFinish = (values) => {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(RSA_PUBLIC_KEY);
    let data = {
      username: values.username,
      password: encrypt.encrypt(values.password),
      t: this.state.t,
      code: values.code,
    };
    this.props.dispatch({
      type: "Login/in",
      payload: { params: data },
      history: this.props.history,
    });
  };
  /**
   * 更换验证码方法
   */
  ChangeImg() {
    this.setState({
      t: new Date().getTime(),
    });
  }
  /**
   * 按回车提交方法
   */
  KeyDown(e) {
    // if (e.key === "Enter") {
    //   this.onFinish;
    // }
  }
  render() {
    return (
      <div className={styles.Auth_box}>
        <div className={styles.Auth_Login}>
          <div className={styles.Auth_Form}>
            <h1>欢迎登录</h1>
            <Form
              {...layout}
              ref={this.formRef}
              name="control-ref"
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                label="用户名"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input size="large" placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                label="密码"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="请输入密码"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                name="code"
                label="验证码"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <div className={styles.Auth_Code}>
                  <Input
                    size="large"
                    style={{ width: "1.25rem" }}
                    placeholder="请输入验证码"
                    maxLength="4"
                    onKeyDown={this.KeyDown.bind(this)}
                  />
                  <img
                    alt=""
                    onClick={this.ChangeImg.bind(this)}
                    src={`/api/cms/captcha.jpg?t=${this.state.t}`}
                  />
                </div>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button size="large" block type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(index);
