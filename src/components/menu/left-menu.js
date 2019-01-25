import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import '../../styles/left-menu.css'
class LeftMenu extends Component {
    render () {
        return (
            <div  className="menu-component">
                <div className="menu-container">
                    <div className="menu-items">
                        <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/subscriptions">
                            <div className="text">Subscriptions</div>
                        </NavLink>
                        <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/shedule">
                            <div className="text">Schedule</div>
                        </NavLink>
                        <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/profile">
                            <div className="text">My Profile</div>
                        </NavLink>
                        <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                 to="/notes">
                            <div className="text">Carenotes</div>
                        </NavLink>
                    </div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </div>

            </div>);
    }
}

export default LeftMenu;