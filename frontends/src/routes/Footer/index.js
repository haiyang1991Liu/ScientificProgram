/*
 * @Author: @yzcheng
 * @Date: 2020-11-02 09:32:14
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-18 14:27:27
 */
import React, { Component } from 'react';
import './index.scss'
class Footer extends Component {
    render() {

        return (
            <div className="footer">
                Copy Right@ {this.props.LocalTime} 中咨数据公司 All Right Reserved
            </div>
        );
    }
}

export default Footer;