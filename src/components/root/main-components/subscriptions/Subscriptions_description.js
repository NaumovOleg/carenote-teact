import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda/dist/ramda.min'
class Subscriptions_description extends Component {
    state = {

    };
    constructor ( props ) {
        super ( props );
    }
    render () {
        const selectPlan = this.props.changeSubscription;
        let plan = {

        }
        if( this.props.subscriptions.shopify_product_id!==undefined && !R.isEmpty(this.props.parcedProducts) ){
            plan = this.props.parcedProducts[this.props.subscriptions.shopify_product_id];
        }

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
                            <p>{plan.name }</p>
                            <p>{ plan.plan_description }</p>
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
        parcedProducts: state.parcedProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Subscriptions_description );