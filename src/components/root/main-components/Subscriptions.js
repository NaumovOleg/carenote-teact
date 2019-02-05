import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChangeSubscription from './subscriptions/CahngeSubscription';
import Subscriptions_description from'./subscriptions/Subscriptions_description';
class Subscriptions extends Component {
    state = {
        activeRoute:'subscriptions'
    };
    constructor ( props ) {
        super ( props );
    }

    selectPlan = ( route )=>{
        this.setState({
            activeRoute:route
        })
    }





    render () {

        const routes  = {
            subscriptions:<Subscriptions_description changeSubscription={this.selectPlan}  />,
            schange_subscritions:<ChangeSubscription/>
        }

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
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Subscriptions );
