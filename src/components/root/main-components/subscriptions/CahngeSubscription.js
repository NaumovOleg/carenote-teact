import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeSubscription extends Component {
    constructor ( props ) {
        super ( props );
    }
    render () {

        return (
            <div className="change-subscriptions-component">
              <div className="change-subscriptions-container">
                 <div className="change-subscriptions-header">
                    <p>Change Subscription</p>
                    <p><a href="#">&#60; Back</a></p>
                 </div>
                 <div className="current-subscription">
                    <p><strong>Current Subscription: Gold Plan</strong><br />
                    2 Care calls per week, 2 outbound calls, unlimited text messaging</p>
                    <p>$89/mo</p>
                 </div>
                 <div className="silver-plan-subscription">
                    <p><strong>Silver Plan $49/mo</strong><br />
                    1 Care call per week, unlimited text messaging</p>
                    <button><a href="#">Change to Silver</a></button>
                 </div>
                 <div className="platinum-plan-subscription">
                    <p><strong>Platinum Plan $299/mo</strong><br />
                    7 Care calls per week, unlimited outbound calls,
                    unlimited text messaging</p>
                    <button><a href="#">Change to Platinum</a></button>
                 </div>
              </div>
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
