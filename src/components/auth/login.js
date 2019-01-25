import React, { Component } from 'react';
import '../../styles/login.css';
import phoneLogo from '../../assets/Phone.png';
import mainLogo from '../../assets/CareNote.png';



class Login extends Component {

    render () {

        return (
            <div className="login-container">
                <div className='loginHeader'>
                  <p>{this.props.data.header}</p>
                  <p>{this.props.data.subHeader}</p>
                </div>
                <form className="loginForm">
                  <input type="text" placeholder="Your email address" className="emailInput"/>
                  <input type="password" placeholder="Your password" className="passwordInput"/>
                  <input type="submit" value="Login" className="loginButton"/>
                </form>
                <div className="registerLink">
                  <a href="#" className="passwordRestore">Forgot password?</a>
                  <p>Don't have an account? <a href="#"> Register here to get started</a></p>
                </div>

            </div>)
    }
}

export default Login;
