import React, { Component } from 'react';
import headerIcon from '../assets/CareNote.png';
import {connect} from 'react-redux'
import  '../styles/header.css';

class Header extends Component {


    render () {

        console.log( this.props );

        const style = {
            display:this.props.auth.loggedIn?'flex':'none'
        }

        return (
            <div  className="header-coponent">
                <div className="header-container">
                    <div className="welcome-container" style={style}>
                        <div className="user-name">
                            Hi {this.props.auth.user.name}
                        </div>
                        <div className="separator"></div>
                        <div className="plan">
                            {this.props.plan.plan}
                        </div>

                    </div>
                    <div className="logo-container" >
                        <div className="logo">
                            <img src={headerIcon}/>
                        </div>
                    </div>
                    <div className="log-out__button" style={style}>
                        <button className="log-out">Logout</button>

                    </div>

                </div>

            </div>);
    }
}

const mapStateToProps = state => {
    return {
        auth:state.auth,
        plan:state.plan,
    };

};
const mapDispatchToProps = dispatch => {
    return {};
};

export default  connect(mapStateToProps, mapDispatchToProps)(Header);
