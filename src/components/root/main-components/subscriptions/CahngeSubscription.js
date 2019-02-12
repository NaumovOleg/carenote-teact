import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dialog} from 'primereact/dialog';
import backimg from '../../../../assets/Group 268.png';

class ChangeSubscription extends Component {
    state = {
        first: 0,
        visible1: false,
        visible2: false,
    };

    constructor(props) {
        super(props);
    }

    openPopup = () => {
        this.setState({
            visible: true
        })
    }
    onClick = (event) => {
        this.setState({visible: true});
    }

    onClickOpen = (value) => {
        this.setState({
            [value]: true
        });
    }


    onHide = (value) => {
        this.setState({[value]: false});
    }

    render() {

        const hidewindow = this.onHide;
        const onClickOpen = this.onClickOpen;
        const returnRoute = this.props.returnRoute;

        return (
            <div className="change-subscriptions-component">
                <Dialog visible={this.state.visible1} onHide={function () {
                    hidewindow('visible1')
                }} className="change-subscriptions-modal-window">
                    <div className="change-subscriptions-modal-container">
                        <div className="change-subscriptions-modal-text-box">
                            <p>Please confirm change in subscription to:</p>
                            <p className="change-subscriptions-choosen-plan"><strong>Platinum Plan $299/mo</strong></p>
                            <button onClick={
                                function () {

                                    hidewindow('visible1');
                                    onClickOpen('visible2');
                                }

                            }>Submit
                            </button>
                        </div>
                    </div>
                </Dialog>
                <Dialog visible={this.state.visible2} onHide={function () {
                    hidewindow('visible2')
                }} className="subscriptions-modal-window">
                    <div className="subscriptions-modal-container">
                        <div className="subscriptions-modal-text-box">
                            <p><strong>Thank you. You’re confirmed for a<br />change to the Platinum Plan.</strong></p>
                            <p className="subscriptions-choosen-plan">The plan change will take affect<br />
                                starting April 1, 2019.</p>
                            <button onClick={function () {
                                hidewindow('visible2');
                                returnRoute('confirmation')
                            }}>Close
                            </button>
                        </div>
                    </div>
                </Dialog>
                <div className="change-subscriptions-container">
                    <div className="change-subscriptions-header">
                        <p>Change Subscription</p>
                        <p><a onClick={function () {
                            returnRoute( 'subscriptions' )
                        }}><img src={backimg}/> Back</a></p>
                    </div>
                    <div className="current-subscription">
                        <p><strong>Current Subscription: Gold Plan</strong><br />
                            2 Care calls per week, 2 outbound calls, unlimited text messaging</p>
                        <p>$89/mo</p>
                    </div>
                    <div className="silver-plan-subscription">
                        <p><strong>Silver Plan $49/mo</strong><br />
                            1 Care call per week, unlimited text messaging</p>
                        <button onClick={function () {
                            onClickOpen('visible1')
                        }}>Change to Silver
                        </button>
                    </div>
                    <div className="platinum-plan-subscription">
                        <p><strong>Platinum Plan $299/mo</strong><br />
                            7 Care calls per week, unlimited outbound calls,
                            unlimited text messaging</p>
                        <button onClick={function () {
                            onClickOpen('visible1')
                        }}>Change to Platinum
                        </button>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSubscription);
