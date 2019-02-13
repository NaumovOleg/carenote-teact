import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {
    constructor ( props ) {
        super ( props );
    }
    render () {
        const returnRoute = this.props.returnRoute;

        return (
            <div className="subscription-confirmation">
                <div className="subscriptions-component">
                    <div className="main-container">
                        <div className="subscriptions">
                            <p>Subscription confirmation</p>
                            <p><a onClick={function () {
                                returnRoute( 'subscriptions' )
                            }}>&#x3c; Back </a></p>
                        </div>
                        <div className="choosenSubscription">
                            <p>Thank you. You're confirmed for a change to the Platinum Plan.</p>
                            <p>The plan change will take affect starting April 1, 2019</p>
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( Confirmation );
