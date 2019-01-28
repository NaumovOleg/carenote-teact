import React, { Component } from 'react';
import headerIcon from '../assets/CareNote.png';
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'
import  '../styles/header.css';

class Header extends Component {

    render () {
        const style = {
            display:this.props.auth.loggedIn?'flex':'none'
        };

        let planTitle = '';
        if( this.props.plan.line_items!==undefined){
            planTitle = this.props.plan.line_items[0].title
        }

        return (
            <div  className="header-coponent">
                <div className="header-container">
                    <div className="welcome-container" style={style}>
                        <div className="user-name">
                            Hi {this.props.auth.user.first_name}
                        </div>
                        <div className="separator"></div>
                        <div className="plan">
                            {planTitle}
                        </div>

                    </div>
                    <div className="logo-container" >
                        <div className="logo">
                            <img src={headerIcon}/>
                        </div>
                    </div>
                    <div className="log-out__button" style={style}>
                        <a href="/account/logout" className="log-out" onClick={this.props.logOut}>Logout</a>
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
    return {
        logOut :()=>dispatch(actions.logOut())
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Header);
