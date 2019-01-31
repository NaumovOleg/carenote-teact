import React, { Component } from 'react';
import headerIcon from '../assets/CareNote.png';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import  '../styles/header.css';

class Header extends Component {



    constructor ( props ) {
        super ( props );


        this.state = {
            //plan:props.subscriptions[0]
        }
    }
    render () {
        const style = {
            display: this.props.auth.loggedIn?'flex':'flex',
        };
        let planName = '';
        if( this.props.subscriptions.length>0){
            planName = this.props.subscriptions[0].product_title
        }

        return (
            <div className="header-coponent">
                <div className="header-container">
                    <div className="welcome-container" style={style}>
                        <div className="user-name">
                            Hi { this.props.user.first_name }
                        </div>
                        <div className="separator"></div>
                        <div className="plan">
                            { planName}
                        </div>

                    </div>
                    <div className="logo-container">
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
        user: state.r_customer,
        auth:state.auth,
        subscriptions:state.subscriptions
    };

};
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch ( actions.logOut () ),
    };
};

export default  connect ( mapStateToProps, mapDispatchToProps ) ( Header );
