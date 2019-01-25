import React, { Component } from 'react';
class Login extends Component {

    render () {
        return (
            <div className="login-container">
                {this.props.data.header}dddd
                {this.props.data.subHeader}
            </div>)
    }
}

export default Login;
