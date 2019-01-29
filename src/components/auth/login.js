import React, { Component } from 'react';
import '../../styles/login.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
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

    submit = ()=>{

        this.props.login(this.state)

    }

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
                <input type="email" onChange={function ( el ) {
                    setNewState('email', el.target.value )
                }}>
                </input>
                <input type="password" onChange={function ( el ) {
                    setNewState('password', el.target.value )
                }}>

                </input>

                <button onClick={this.submit}>login</button>

                <div className="registerLink">
                    <a href="#" className="passwordRestore">Forgot password?</a>
                    <p>Don't have an account? <a href="#"> Register here to get started</a></p>
                </div>
            </div>);
    }
}
const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        login:( data )=>dispatch(actions.logIn(data)),
    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Login ) ;
