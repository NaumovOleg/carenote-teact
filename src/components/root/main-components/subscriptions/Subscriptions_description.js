import React, { Component } from 'react';
import { connect } from 'react-redux';

class Subscriptions_description extends Component {
    state = {
        planSubscription:{
            1859628302425:{
                name:"Silver",
                description:'1 Care Call per week, Unlimited text messaging, Carenotes sent weekly'
            },
            1859628367961:{
                name:"Gold",
                description:'2 Care Calls per week, 2 Outbound calls per week, Unlimited text messaging, Carentes sent weekly'
            },
            1859628433497:{
                name:"Platinum",
                description:'7 Care Calls per week, Unlimited outbound calls, Unlimited text messaging, Carentes sent daily, Dedicated personal concierge'
            },
            undefined:{
                name:'',
                description:''
            }
        }
    };
    constructor ( props ) {
        super ( props );
    }
    render () {
        const selectPlan = this.props.changeSubscription;

        console.log( this.state.planSubscription[this.props.subscriptions.shopify_product_id] , this.props.subscriptions.shopify_product_id );
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
                            <p>{this.state.planSubscription[this.props.subscriptions.shopify_product_id].name }</p>
                            <p>{this.state.planSubscription[this.props.subscriptions.shopify_product_id].description }</p>
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