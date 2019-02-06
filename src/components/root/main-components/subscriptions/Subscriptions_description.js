import React, { Component } from 'react';
import { connect } from 'react-redux';

class Subscriptions_description extends Component {
    constructor ( props ) {
        super ( props );
    }
    render () {
        let planName = '';
        if( this.props.subscriptions.length>0){
            planName = this.props.subscriptions[0].product_title
        }
        const selectPlan = this.props.changeSubscription;
        return (
            <div className="change-subscriptions-component">
                <div className="subscriptions-component">
                    <div className="main-container">
                        <div className="subscriptions">
                            <p>Subscriptions</p>
                            <p><a className="change-plan-button" onClick={function () {
                                selectPlan( 'schange_subscritions' )
                            }}>Change Plan</a></p>
                        </div>
                        <div className="choosenSubscription">
                            <p>Gold Plan</p>
                            <p>{planName}</p>
                        </div>
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( Subscriptions_description );