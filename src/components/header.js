import React, {Component} from 'react';
import headerIcon from '../assets/CareNote.png';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Cookies  from 'universal-cookie';
import {Icon} from 'react-icons-kit'
import {phone} from 'react-icons-kit/icomoon/phone';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.cookies = new Cookies();
    }

    render() {
        const style = {
            display: this.props.auth.loggedIn ? 'flex' : 'flex',
        };
        let planName = '';
        if (this.props.subscriptions.shopify_product_id !== undefined) {
            planName = this.props.parcedProducts [this.props.subscriptions.shopify_product_id].name
        }

        const cookies = this.cookies;

        const menuClick = this.props.showMenu;


        return (
            <div className="header-coponent">
                <div className="header-container">
                    <div className="welcome-container" style={style}>
                        <div className="user-name">
                            Hi { this.props.user.first_name }
                        </div>
                        <div className="separator"></div>
                        <div className="plan">
                            { planName } Plan
                        </div>
                        <div className="mobile-welcome-container" onClick={function () {
                            menuClick('flex')
                        }}>
                            <i className="pi pi-user"></i>
                        </div>
                    </div>

                    <div className="logo-container">
                        <div className="logo">
                            <img src={headerIcon}/>
                        </div>
                    </div>
                    <div onClick={function () {
                        cookies.remove('care-note-api-user')
                    }} className="log-out__button" style={style}>
                        <div className="phone-icon"><Icon icon={phone}/></div>
                        <a href="/account/logout" className="log-out" onClick={this.props.logOut}>Logout</a>
                    </div>
                </div>
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        auth: state.auth,
        subscriptions: state.subscriptions,
        parcedProducts: state.parcedProducts
    };

};
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(actions.logOut()),
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Header);
