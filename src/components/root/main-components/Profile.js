import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions'
class Profile extends Component {
    constructor(props) {
        console.log( props );
        super( props );
        this.state = {
            user:{...props.user},
            address:{...props.address},
            //subscription:{...props.subscription}
        };
    }

    updateCustomer = (field, value )=>{
        this.setState({
            subscription:this.state.subscription,
            user:{
                     ...this.state.user,
                [field]:value
            }
        })
    };

    updateAddress = (field, value ) =>{
        this.setState({
            user:this.state.user,
            address:{
                ...this.state.address,
                [field]:value
            }
        })
    };

    saveChanges = ()=>{
        this.saveCustomer();
        // this.saveAddress();
    };


    componentWillMount(){

    }

    saveCustomer = ()=>{
        let  {first_name,email,last_name,billing_phone,id ,billing_address1,billing_address2,billing_province,billing_city,billing_zip} = this.state.user;
        let user = {first_name,email,last_name,billing_phone,billing_address1,billing_address2,billing_province,billing_city,billing_zip};
        this.props.updateCustomer(id, user )
    };

    saveAddress = ()=>{
        let  { address1,address2,city,zip, id  } = this.state.address;
        const address = { address1,address2,city,zip };
        this.props.updateAddress( id, address)
    }
    render() {
        console.log( this.state );
        const address = this.state.address;
        const updateCustomer = this.updateCustomer;
        const updateAddress = this.updateAddress;
        const saveChanges = this.saveChanges;
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
                      <span className="checkboxText">Receive notifications via text/SMS</span>
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
                    <label className="checkboxContainer">Receive notifications via text/SMS
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="paymentSection">
                    <div className="billingAddress">
                      <h5>Billing Address</h5>
                        <input type="text" name="addressOne"  onChange={
                            function ( el ) {
                                updateCustomer('billing_address1', el.target.value )
                            }
                        }  value={this.state.user.billing_address1} placeholder="Address 1" />
                        <input type="text" name="addressTwo" onChange={
                            function ( el ) {
                                updateCustomer('billing_address2', el.target.value )
                            }
                        } value={this.state.user.billing_address2} placeholder="Address 2" />
                        <input onChange={
                            function ( el ) {
                                updateCustomer('billing_city', el.target.value )
                            }
                        } type="text" name="city" value={this.state.user.billing_city} placeholder="City" />
                        <input type="text" value={this.state.user.billing_province}
                               onChange={
                                   function ( el ) {
                                       updateCustomer('billing_province', el.target.value )
                                   }
                               }

                               name="State" placeholder="State" />
                        <input onChange={
                            function ( el ) {
                                updateCustomer( 'billing_zip', el.target.value )
                            }
                        } type="text" name="zipCode" value={this.state.user.billing_zip} placeholder="Zip code" />
                    </div>
                    <div className="paymentInfo">
                      <h5>Payment Info</h5>
                        <input type="text" name="creditCard" placeholder="Credit Cart" />
                        <input type="text" name="ccv" placeholder="CCV" />
                        <input type="text" name="expiration" placeholder="Expiration" />
                    </div>
                  </div>
                    <button  type="submit" value="Save" className="profileButton" onClick={
                        function (  ) {
                            // saveAddress()
                            saveChanges()
                        }
                        }>Save</button>
                </div>
              </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user:state.auth.user,
        address:state.address,
        subscription:state.subscriptions[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateAddress:(AID,address)=>dispatch(actions.updateAddress(AID,address)),
        updateCustomer:(CID, customer)=>dispatch(actions.updateCustomer(CID,customer)),
        // updateSubscriptions:(subscription)=>dispatch(actions.updateSubscriptions(subscription))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
