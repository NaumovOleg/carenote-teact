import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import '../../styles/left-menu.css';
import * as actions from  '../../store/actions/index';

class LeftMenu extends Component {

    closeMenu = ( ) =>{
        this.props.closeMenu()
    };

    changeLocation = ( location )=>{

        const locations = {
            prev:this.props.location.curr,
            curr:location
        };
        this.props.changeLocation( locations )
    };

    render () {
        const changeLocation = this.changeLocation;
        const closeMenu = this.closeMenu;
        return (
            <div  className="menu-component" style={this.props.menu}>
                <div className="menu-container">
                    <div className="menu-items">
                        <NavLink  className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/subscriptions">
                            <div onClick={function (  ) {
                                changeLocation('/subscriptions')
                            }} className="text">Subscriptions</div>
                        </NavLink>
                        <NavLink  className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/shedule">
                            <div  onClick={function (  ) {
                                changeLocation('/shedule')
                                closeMenu( )
                            }}  className="text">Schedule</div>
                        </NavLink>
                        <NavLink   className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/profile">
                            <div  onClick={function (  ) {
                                changeLocation('/profile')
                            }} className="text">My Profile</div>
                        </NavLink>
                        <NavLink  className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/notes">
                            <div onClick={function (  ) {
                                changeLocation('/notes' )
                            }} className="text">Carenotes</div>
                        </NavLink>
                    </div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </div>

            </div>);
    }
}

const mapStateToProps = state => {
    return {
        menu:state.menu,
        location:state.location
    };

};
const mapDispatchToProps = dispatch => {
    return {
        closeMenu: (  ) => dispatch ( actions.showMenu( 'none' ) ),
        changeLocation : ( location ) =>dispatch(actions.changeLocation( location ))
    };
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(LeftMenu));

