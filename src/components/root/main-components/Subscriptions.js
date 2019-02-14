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
    }

    selectPlan = (route) => {
        this.setState({
            activeRoute: route
        })
    };
    setSelectedPlan = async (id) => {
        this.setState({
            selectedPlanId: id,
            selectedPlan: {...this.props.parcedProducts[id]}
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
            confirmation: <Confirmation planName={this.state.selectedPlan.name} returnRoute={this.selectPlan}/>
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
        products: state.products,
        parcedProducts: state.parcedProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateSubscriptions: (SID, subscription) => dispatch(actions.updateSubscriptions(SID, subscription))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
