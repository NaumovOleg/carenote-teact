import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../styles/root/subscriptions.css';


class Subscriptions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="subscriptions-component">
            <div className="main-container">
                <div className="subscriptions">
                  <h2>Subscriptions</h2>
                  <p><a href="#">Change Plan</a></p>
                </div>
                <div className="choosenSubscription">
                  <p>Gold Plan</p>
                  <p>2 Care calls per week, 2 outbound calls, unlimited text messaging</p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
