import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions'
import '../../../styles/root/profile.css';

class Profile extends Component {
    constructor(props) {
        console.log( props );
        super(props);
        this.state = {
            user:{...props.user},
            address:{...props.address}
        };
    }

    updateCustomer = (field, value )=>{
        this.setState({
            user:{
                     ...this.state.user,
                [field]:value
            }
        })
    };

    componentWillMount(){

    }

    saveCustomer = ()=>{
        let  {first_name,email,last_name,billing_phone} = this.state.user;
        let user = {first_name,email,last_name,billing_phone};
        this.props.updateCustomer(user)
    };
    render() {
        console.log( this.state )
        const address = this.state.address;
        const updateCustomer = this.updateCustomer;
        return (
            <div className="accaunt-component">
              <div className="profileContainer">
                <p>My Profile</p>
                <div>
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
                    <label className="checkboxContainer">
                      <span className="checkboxText">Receive notifications vis text/SMS</span>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <h5>Your Info</h5>
                  <div className="userInfo">
                    <input type="text" name="name" placeholder="First name" onChange={
                        function ( el ) {
                            updateCustomer('first_name', el.target.value )
                        }
                    } value={this.state.user.first_name}/>
                    <input type="text" name="lastName" placeholder="Last name" onChange={
                        function ( el ) {
                            updateCustomer('last_name', el.target.value )
                        }
                    } value={this.state.user.last_name}/>
                    <input type="text" name="phone" placeholder="Phone Number" onChange={
                        function ( el ) {
                            updateCustomer('billing_phone', el.target.value )
                        }
                    } value={this.state.user.billing_phone}/>
                    <input type="email" name="email" placeholder="Email address"
                           onChange={
                               function ( el ) {
                                   updateCustomer('email', el.target.value )
                               }
                           } value={this.state.user.email} />
                    <label className="checkboxContainer">Receive notifications vis text/SMS
                      <input type="checkbox" />
                      <span className="checkmark"></span>
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
                    <button  type="submit" value="Save" className="profileButton" onClick={this.saveCustomer}>Save</button>
                </div>
              </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user:state.r_customer,
        address:state.address
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateCustomer:(customer)=>dispatch(actions.updateRCustomer(customer)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
