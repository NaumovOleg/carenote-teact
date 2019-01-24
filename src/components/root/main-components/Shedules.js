import React, {Component} from 'react';
import {connect} from 'react-redux';


class Shedule extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="shedule-component">
                Shedule
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shedule);