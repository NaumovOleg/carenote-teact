import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../styles/root/profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const address = this.props.user.addresses[0];
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
                    <input type="text" name="zipCode" placeholder="Zip code" />
                    <input type="text" name="phone" placeholder="Phone Number" />
                    <input type="email" name="email" placeholder="Email address" />
                    <label class="checkboxContainer">
                      <input type="checkbox" />
                      <span class="checkmark">Receive notifications via text/SMS</span>
                    </label>
                  </div>
                  <h5>Your Info</h5>
                  <div className="userInfo">
                    <input type="text" name="name" placeholder="First name" value={this.props.user.first_name}/>
                    <input type="text" name="lastName" placeholder="Last name" value={this.props.user.last_name}/>
                    <input type="text" name="phone" placeholder="Phone Number" value={this.props.user.phone}/>
                    <input type="email" name="email" placeholder="Email address" value={this.props.user.email} />
                    <label class="checkboxContainer">
                      <input type="checkbox" />
                      <span class="checkmark">Receive notifications via text/SMS</span>
                    </label>
                  </div>
                  <div className="paymentSection">
                    <div className="billingAddress">
                      <h5>Billing Address</h5>
                        <input type="text" name="addressOne"  value={address.address1} placeholder="Address 1" />
                        <input type="text" name="addressTwo" value={address.address2} placeholder="Address 2" />
                        <input type="text" name="city" value={address.city} placeholder="City" />
                        <input type="text" name="State" placeholder="State" />
                        <input type="text" name="zipCode" value={address.zip} placeholder="Zip code" />
                    </div>
                    <div className="paymentInfo">
                      <h5>Payment Info</h5>
                        <input type="text" name="creditCard" placeholder="Credit Cart" />
                        <input type="text" name="ccv" placeholder="CCV" />
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
