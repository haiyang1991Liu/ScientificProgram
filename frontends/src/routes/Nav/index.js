import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
          <div className="navigation-bar">
            <NavLink className="item" exact to="/BadGeoloyMonitor">
              不良地质自动识别
            </NavLink>
            <NavLink className="item" exact to="/ContructionProgress">
              施工进度监测
            </NavLink>
            <NavLink className="item" exact to="/SubsidenceMonitor">
              施工进度监测
            </NavLink>
            <NavLink className="item" exact to="/RiverSandCapa">
              航道表层含沙量分析
            </NavLink>
          </div>
        )
    }
}

export default Nav;