/*
 * @Author: @yzcheng
 * @Date: 2020-11-02 09:32:14
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-23 11:31:44
 */
import Nav from '@routes/Nav'
import React, { Component } from 'react';
import Logo from '@assets/images/logo.png';
import  "./index.scss";
class Header extends Component {
    render() {
        return (
          <div className="header">
            <div className="header_title">
              <img src={Logo} alt="" />
              <div>高分交通基础设施一张图平台</div>
            </div>
            <Nav/>
          </div>
        )
    }
}

export default Header;