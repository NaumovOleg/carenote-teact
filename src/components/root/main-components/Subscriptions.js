import React, {Component} from 'react';
import {connect} from 'react-redux';


class Subscriptions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="subscriptions-component">
                Subscriptions component
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

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);