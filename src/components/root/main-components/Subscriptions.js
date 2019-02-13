import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index'
import ChangeSubscription from './subscriptions/CahngeSubscription';
import Subscriptions_description from'./subscriptions/Subscriptions_description';
import Confirmation from './subscriptions/Confirmation'
class Subscriptions extends Component {
    state = {
        activeRoute: 'subscriptions',
        selectedPlanId: '',
        selectedPlan: {}
    };

    constructor(props) {
        super(props);
        this.planSubscription = {
            1859628302425: {
                name: "Silver",
            },
            1859628367961: {
                name: "Gold",
            },
            1859628433497: {
                name: "Platinum",
            },
        }
    }

    selectPlan = (route) => {
        this.setState({
            activeRoute: route
        })
    };
    setSelectedPlan = async (id) => {
        await this.props.products.forEach(el => {
            if (el.id == id) {
                this.setState({
                    selectedPlanId: id,
                    selectedPlan: el
                });
                return
            }
        });
    };

    confirmUpdatePlan = () => {

        const subscription = this.props.subscriptions;
        subscription.price = this.state.selectedPlan.variants[0].price;
        subscription.product_title = this.state.selectedPlan.title;
        subscription.shopify_product_id = this.state.selectedPlan.id;
        subscription.shopify_variant_id = this.state.selectedPlan.variants[0].id;
        this.props.updateSubscriptions(subscription.id, subscription);

    };

    render() {
        const routes = {
            subscriptions: <Subscriptions_description changeSubscription={this.selectPlan}/>,
            schange_subscritions: <ChangeSubscription confirm={this.confirmUpdatePlan}
                                                      selectedPlan={this.state.selectedPlan}
                                                      setSelectedPlan={this.setSelectedPlan}
                                                      returnRoute={this.selectPlan}/>,
            confirmation: <Confirmation planName={this.planSubscription[this.state.selectedPlanId]} returnRoute={this.selectPlan}/>
        };

        return (
            <div > {
                routes[this.state.activeRoute]
            }</div>
        )


    }
}
const mapStateToProps = state => {
    return {
        subscriptions: state.subscriptions,
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateSubscriptions: (SID, subscription) => dispatch(actions.updateSubscriptions(SID, subscription))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
