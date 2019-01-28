import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        console.log( this.props )
        return (
            <div className="accaunt-component">
                Accaunt

                {this.props.user.email}


            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user:state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);