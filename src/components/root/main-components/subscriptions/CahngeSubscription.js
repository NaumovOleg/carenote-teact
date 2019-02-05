import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeSubscription extends Component {
    constructor ( props ) {
        super ( props );
    }
    render () {

        return (
            <div className="change-subscriptions-component">
              change subscriptions
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        subscriptions: state.subscriptions,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( ChangeSubscription );