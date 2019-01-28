import React, { Component } from 'react';
import '../../styles/login.css';
import phoneLogo from '../../assets/Phone.png';
import mainLogo from '../../assets/CareNote.png';


class Login extends Component {

    state = {
        password: '',
        email:    '',
    };

    setNewState = async ( type, value ) => {
        await this.setState ( {
            [type]: value,
        } );
    };

    render () {

        const email = this.state.email;
        const password = this.state.password;
        const setNewState = this.setNewState;

        return (
            <div className="login-container">
                <div className='loginHeader'>
                    <p>{this.props.data.header}</p>
                    <p>{this.props.data.subHeader}</p>
                </div>
                <form method="post" action="/account/login" id="customer_login" acceptCharset="UTF-8">
                    <input type="email" value={email} name="customer[email]"
                           id="customer_email" className="large"
                           size="30" autoCorrect="off"
                           onChange={function ( el ) {
                               setNewState ( 'email', el.target.value );
                           }}
                           autoCapitalize="off" tabIndex="1"/>
                    <label htmlFor="customer_password" className="login">Password</label>
                    <input
                        onChange={function ( el ) {
                            setNewState ( 'password', el.target.value );
                        }}
                        type="password" value={password} name="customer[password]" id="customer_password" className="large password" size="16" tabIndex="2"/>
                    <input className="btn action_button" type="submit" value="Login" style={{ marginBottom: '5px !important', tabIndex: '3' }}/>
                </form>
                <div className="registerLink">
                    <a href="#" className="passwordRestore">Forgot password?</a>
                    <p>Don't have an account? <a href="#"> Register here to get started</a></p>
                </div>
            </div>);
    }
}

export default Login;
