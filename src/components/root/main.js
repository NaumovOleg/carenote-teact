import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Accaunt from './main-components/Accaunt';
import Notes from './main-components/CareNotes';
import Shedule from './main-components/Shedules';
import Subscriptions from './main-components/Subscriptions'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const routes =
            (<Switch>
                <Route path="/accaunt" component={Accaunt}/>
                <Route path="/subscriptions" component={Subscriptions}/>
                <Route path="/shedule" component={Shedule}/>
                <Route path="/notes" component={Notes}/>
                <Redirect to="/subscriptions"/>
            </Switch>);
        return (
          <div className="main-component">
              main
              {routes}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter ( connect(mapStateToProps, mapDispatchToProps)(Main));