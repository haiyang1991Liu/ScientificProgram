import React, { Component } from 'react';

class Footer extends Component {
    componentDidMount(){
        //let getCurrentYear=this.props.getLocalTime();
    }
    render() {
        
        return (
            <div className="footer">
               Copy Right@ {this.props.LocalTime} 中咨数据公司 All Right Reserved 
            </div>
        );
    }
}

export default Footer;