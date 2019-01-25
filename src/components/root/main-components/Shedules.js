import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

class Shedule extends Component {
    constructor(props) {
        super(props);
    };
    openMenu =( )=>{

        this.props.openMenu();



    };
    render() {
        const location = this.props.location.prev;
        return (
            <div className="shedule-component">
                <NavLink   className="header-navigation-menu" activeClassName="header-navigation__selected"
                          to={location}>
                    <div onClick={this.openMenu}  className="text">back</div>
                </NavLink>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        location:state.location
    };
};

const mapDispatchToProps = dispatch => {
    return {

        openMenu: (  ) => dispatch ( actions.showMenu( 'flex' ) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shedule);