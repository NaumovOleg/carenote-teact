import React, { Component } from 'react';
import Login from './login';
class Auth extends Component {


    render () {
        const loginData = {

            header:    'Hi. Welcome back.',
            subHeader: 'Enter your email and password to login to your account.',
            registerHere:'',
            login:''
        };
        return (
            <div  className="auth-container">
                <Login data={loginData}  />
            </div>)
    }
}

export default Auth;
