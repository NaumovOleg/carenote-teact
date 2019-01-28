import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

import '../../../styles/left-menu.css'

class Shedule extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="shedule-component">
                <button onClick={this.props.prev}> back </button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shedule);