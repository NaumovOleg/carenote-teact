import React, { Component } from 'react';
import '../../styles/login.css';
import phoneLogo from '../../assets/Phone.png';
import mainLogo from '../../assets/carenote.png';



class Login extends Component {

    render () {

        return (
            <div className="login-container">
            <div className="callSection">
              <div className="telphoneNumber">
                <img src={phoneLogo}/>
                <p>Call Us Toll-Free <span>1-800-888-CARE</span></p>
              </div>
              <div className="mainLogoSection">
                <img src={mainLogo}/>
              </div>
            </div>
                <div className='loginHeader'>
                  {this.props.data.header}
                  {this.props.data.subHeader}
                </div>
                <form>
                  <input type="text" placeholder="Your email address" />
                  <input type="password" placeholder="Your password" />
                  <input type="submit" value="Login" />
                </form>
                <div className="registerLink">
                  <a href="#">Forgot password?</a>
                  <p>Don't have an account?<a href="#">Register here to get started</a></p>
                </div>

            </div>)
    }
}

export default Login;
