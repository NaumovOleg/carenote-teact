import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dialog} from 'primereact/dialog';
import backimg from '../../../../assets/Group 268.png';

class ChangeSubscription extends Component {
    state = {
        first: 0,
        visible1: false,
        visible2: false,
        planSubscription:{
            1859628302425:{
                name:"Silver",
                description:'1 Care Call per week, Unlimited text messaging, Carenotes sent weekly'
            },
            1859628367961:{
                name:"Gold",
                description:'2 Care Calls per week, 2 Outbound calls per week, Unlimited text messaging, Carenotes sent weekly'
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
    constructor(props) {
        super(props);

    }

    openPopup = () => {
        this.setState({
            visible: true
        })
    };
    onClick = (event) => {
        this.setState({visible: true});
    };

    onClickOpen = (value) => {
        this.setState({
            [value]: true
        });
    };
    onHide = (value) => {
        this.setState({[value]: false});
    };
    render() {

        const hidewindow = this.onHide;
        const onClickOpen = this.onClickOpen;
        const returnRoute = this.props.returnRoute;
        const setSelectedPlan = this.props.setSelectedPlan;
        const currentPlan = this.props.parcedProducts[ this.props.subscriptions.shopify_product_id ];
        const confirm = this.props.confirm;
        const selectedPlan = this.props.selectedPlan;
        let avaliablePlans = {};

        Object.keys(this.props.parcedProducts).forEach(el=>{
            if( el!=this.props.subscriptions.shopify_product_id ){
                avaliablePlans[ el ] = this.props.parcedProducts[el]
            }
        });
        return (
            <div className="change-subscriptions-component">
                <Dialog visible={this.state.visible1} onHide={function () {
                    hidewindow('visible1')
                }} className="change-subscriptions-modal-window">
                    <div className="change-subscriptions-modal-container">
                        <div className="change-subscriptions-modal-text-box">
                            <p>Please confirm change in subscription to:</p>
                            <p className="change-subscriptions-choosen-plan"><strong> {selectedPlan.name} Plan ${selectedPlan.price}/mo</strong></p>
                            <button onClick={
                                function () {
                                    confirm();
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
                            <p><strong>Thank you. You’re confirmed for a<br />change to the {selectedPlan.name}Plan.</strong></p>
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
                        }}><img src={backimg}/> <span>Back</span></a></p>
                    </div>
                    <div className="current-subscription">
                        <p><strong>Current Subscription: { currentPlan.name} Plans</strong><br />
                            {currentPlan.plan_description}</p>
                        <p>${currentPlan.price }/mo</p>
                    </div>
                    {
                        Object.keys(avaliablePlans).map(el=>{
                            if( el!=this.props.subscriptions.shopify_product_id ) {
                                return(  <div className="avaliable-plan-subscription " key={el}>
                                    <p><strong>{avaliablePlans[el].name} Plan ${avaliablePlans[el].price}/mo</strong><br />
                                        {avaliablePlans[el].plan_description}</p>
                                    <button onClick={function () {
                                        setSelectedPlan( el );
                                        onClickOpen('visible1')
                                    }}>Change to {avaliablePlans[el].name}
                                    </button>
                                </div>)
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        subscriptions: state.subscriptions,
        products:state.products,
        parcedProducts:state.parcedProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSubscription);
