import React, {Component} from 'react';
import {connect} from 'react-redux';


class Accaunt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="accaunt-component">
                Accaunt
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

export default connect(mapStateToProps, mapDispatchToProps)(Accaunt);