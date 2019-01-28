import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../styles/root/profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        console.log( this.props )
        return (
            <div className="accaunt-component">
              <div className="profileContainer">
                <h3>My Profile</h3>
                <form>
                  <h5>Father's Info</h5>
                  <div className="relative">
                    <input type="text" name="name" placeholder="First name" />
                    <input type="text" name="lastName" placeholder="Last name" />
                    <input type="text" name="residenceAddress" placeholder="Residence Address" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="text" name="State" placeholder="State" />
                    <input type="number" name="zipCode" placeholder="Zip code" />
                    <input type="number" name="phone" placeholder="PhoneNumber" />
                    <input type="email" name="email" placeholder="Email address" />
                    <span><input type="checkbox" name="sms" value="sms" className="smsCheckbox"/> Receive notifications via text/SMS</span>
                  </div>
                  <h5>Your Info</h5>
                  <div className="userInfo">
                    <input type="text" name="name" placeholder="First name" value={this.props.user.first_name}/>
                    <input type="text" name="lastName" placeholder="Last name" value={this.props.user.last_name}/>
                    <input type="number" name="phone" placeholder="PhoneNumber" value={this.props.user.phone}/>
                    <input type="email" name="email" placeholder="Email address" value={this.props.user.email} />
                    <span><input type="checkbox" name="sms" value="sms" className="smsCheckbox"/> Receive notifications via text/SMS</span>
                  </div>
                  <div className="paymentSection">
                    <div className="billingAddress">
                      <h4>Billing Address</h4>
                        <input type="text" name="addressOne" placeholder="Address 1" />
                        <input type="text" name="addressTwo" placeholder="Address 2" />
                        <input type="text" name="city" placeholder="City" />
                        <input type="text" name="State" placeholder="State" />
                        <input type="number" name="zipCode" placeholder="Zip code" />
                    </div>
                    <div className="paymentInfo">
                      <h4>Payment Info</h4>
                        <input type="number" name="creditCard" placeholder="Credit Cart" />
                        <input type="number" name="ccv" placeholder="CCV" />
                        <input type="text" name="expiration" placeholder="Expiration" />
                    </div>
                  </div>
                  <input type="submit" value="Save" className="profileButton"/>
                </form>
              </div>

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
