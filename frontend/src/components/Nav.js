import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div className="navigation-bar">
                <NavLink  className="item" exact to="/">航道表层含沙量分析</NavLink>
                <NavLink  className="item" exact to="/badgeologymonitor">不良地质自动识别</NavLink>
                <NavLink  className="item" exact to="/constructionprogress">施工进度监测</NavLink>
            </div>
        );
    }
}

export default Nav;