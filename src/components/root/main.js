import React, {Component} from 'react';
import {connect} from 'react-redux';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="main-component">
              main
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);