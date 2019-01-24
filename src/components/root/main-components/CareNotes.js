import React, {Component} from 'react';
import {connect} from 'react-redux';


class Notes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="notes-component">
                Notes
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

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
