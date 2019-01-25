import React, {Component} from 'react';
import {connect} from 'react-redux';
import {  Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Profile from './main-components/Profile';
import Notes from './main-components/CareNotes';
import Shedule from './main-components/Shedules';
import Subscriptions from './main-components/Subscriptions';
import LeftMenu from '../menu/left-menu';
import '../../styles/root/main.css'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const routes =
            (<Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/subscriptions" component={Subscriptions}/>
                <Route path="/shedule" component={Shedule}/>
                <Route path="/notes" component={Notes}/>
                <Redirect to="/subscriptions"/>
            </Switch>);
        return (
          <div className="main-component">
              <LeftMenu/>
              <div className="routers-montainer">
                  {routes}
              </div>
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