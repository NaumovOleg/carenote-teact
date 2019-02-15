import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions'
class Profile extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            fieldValidations: {
                first_name: '',
                last_name: '',
                email: '',
                billing_phone: '',
                billing_zip: '',
                creditcard: {
                    expiration: '',
                    cvv: '',
                    number: ''
                }
            },
            user: {...props.user},
            address: {...props.address},
            //subscription:{...props.subscription}
        };
    }

    updateCustomer = (field, value) => {
        this.setState({
            subscription: this.state.subscription,
            user: {
                ...this.state.user,
                [field]: value
            }
        })
    };

    updateAddress = (field, value) => {
        this.setState({
            user: this.state.user,
            address: {
                ...this.state.address,
                [field]: value
            }
        })
    };

    saveChanges = () => {
        this.saveCustomer();
    };
    componentWillMount() {}
    validateName = async () => {
        return  await this.validateField(/^[a-zA-Z]+$/.test(this.state.user.first_name),'first_name',  'Enter correct  name');
    };

    validateSurname = async () => {
       return  await this.validateField(/^[a-zA-Z]+$/.test(this.state.user.last_name),'last_name',  'Enter correct last name');
    };
    validateEmail = async () => {
        var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return  await this.validateField(reg.test(this.state.user.email),'email',  'Enter correct email');
    };
    validatePhone = async () => {
         var reg = new RegExp('^[+0-9]+$');
         return await this.validateField(reg.test(this.state.user.billing_phone),'billing_phone',  'Enter correct phone number')
    };
    validateZip = async () => {
        var reg = new RegExp('^[0-9]+$');
        return await this.validateField(reg.test(this.state.user.billing_zip),'billing_zip',  'Invalid zip')
    };

    validateField = ( state, fieldname, value ) =>{
        if ( !state ) {
            this.setState({
                fieldValidations: {
                    ...this.state.fieldValidations,
                    [fieldname]: value
                }
            });
            return false;
        } else {
            this.setState({
                fieldValidations: {
                    ...this.state.fieldValidations,
                    [fieldname]: ''
                }
            });

            return true
        }
    };

    validateFieldAllFields = async () => {

        let validName = await this.validateName();
        let validSurname = await this.validateSurname();
        let email = await  this.validateEmail();
        let phone  = await this.validatePhone();
        let zip = await  this.validateZip();
        return validName && validSurname && email && phone && zip;

    };

    saveCustomer = async () => {
        if (!await this.validateFieldAllFields()) {
            return
        }
        let {first_name, email, last_name, billing_phone, id, billing_address1, billing_address2, billing_province, billing_city, billing_zip} = this.state.user;
        let user = {
            first_name,
            email,
            last_name,
            billing_phone,
            billing_address1,
            billing_address2,
            billing_province,
            billing_city,
            billing_zip
        };
        this.props.updateCustomer(id, user)
    };

    saveAddress = () => {
        let {address1, address2, city, zip, id} = this.state.address;
        const address = {address1, address2, city, zip};
        this.props.updateAddress(id, address)
    };

    render() {
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
                            <input type="text" name="name" placeholder="First name"/>
                            <input type="text" name="lastName" placeholder="Last name"/>
                            <input type="text" name="residenceAddress" placeholder="Residence Address"/>
                            <input type="text" name="city" placeholder="City"/>
                            <input type="text" name="State" placeholder="State"/>
                            <input type="text" name="zipCode" placeholder="Zip code"/>
                            <input type="text" name="phone" placeholder="Phone Number"/>
                            <input type="email" name="email" placeholder="Email address"/>
                            <label className="checkboxContainer">
                                <span className="checkboxText">Receive notifications via text/SMS</span>
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <h5>Your Info</h5>
                        <div className="userInfo">
                            <div className="field-item">
                                <input type="text" name="name" placeholder="First name" onChange={
                                    function (el) {
                                        updateCustomer('first_name', el.target.value)
                                    }
                                } value={this.state.user.first_name}/>
                                <label htmlFor="name">{this.state.fieldValidations.first_name}</label>

                            </div>


                            <div className="field-item">
                                <input type="text" name="lastName" placeholder="Last name" onChange={
                                    function (el) {
                                        updateCustomer('last_name', el.target.value)
                                    }
                                } value={this.state.user.last_name}/>
                                <label htmlFor="name">{this.state.fieldValidations.last_name}</label>
                            </div>

                            <div className="field-item">
                                <input type="text" name="phone" placeholder="Phone Number" onChange={
                                    function (el) {
                                        updateCustomer('billing_phone', el.target.value)
                                    }
                                } value={this.state.user.billing_phone}/>
                                <label htmlFor="name">{this.state.fieldValidations.billing_phone}</label>
                            </div>
                            <div className="field-item">
                                <input type="email" name="email" placeholder="Email address"
                                       onChange={
                                           function (el) {
                                               updateCustomer('email', el.target.value)
                                           }
                                       } value={this.state.user.email}/>
                                <label htmlFor="name">{this.state.fieldValidations.email}</label>
                            </div>
                            <label className="checkboxContainer">Receive notifications via text/SMS
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="paymentSection">
                            <div className="billingAddress">
                                <h5>Billing Address</h5>
                                <input type="text" name="addressOne" onChange={
                                    function (el) {
                                        updateCustomer('billing_address1', el.target.value)
                                    }
                                } value={this.state.user.billing_address1} placeholder="Address 1"/>
                                <input type="text" name="addressTwo" onChange={
                                    function (el) {
                                        updateCustomer('billing_address2', el.target.value)
                                    }
                                } value={this.state.user.billing_address2} placeholder="Address 2"/>
                                <input onChange={
                                    function (el) {
                                        updateCustomer('billing_city', el.target.value)
                                    }
                                } type="text" name="city" value={this.state.user.billing_city} placeholder="City"/>
                                <input type="text" value={this.state.user.billing_province}
                                       onChange={
                                           function (el) {
                                               updateCustomer('billing_province', el.target.value)
                                           }
                                       }
                                       name="State" placeholder="State"/>

                                <div className="field-item">
                                    <input onChange={
                                        function (el) {
                                            updateCustomer('billing_zip', el.target.value)
                                        }
                                    } type="text" name="zipCode" value={this.state.user.billing_zip}
                                           placeholder="Zip code"/>
                                    <label htmlFor="name">{this.state.fieldValidations.billing_zip}</label>
                                </div>
                            </div>

                            <div className="paymentInfo">
                                <h5>Payment Info</h5>

                                <div className="field-item">
                                    <input type="text" name="creditCard" placeholder="Credit Cart"/>
                                </div>
                                <div className="field-item">
                                    <input type="text" name="ccv" placeholder="CCV"/>
                                </div>
                                <div className="field-item">
                                    <input type="text" name="expiration" placeholder="Expiration"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" value="Save" className="profileButton" onClick={
                            function () {
                                // saveAddress()
                                saveChanges()
                            }
                        }>Save
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        address: state.address,
        subscription: state.subscriptions[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateAddress: (AID, address) => dispatch(actions.updateAddress(AID, address)),
        updateCustomer: (CID, customer) => dispatch(actions.updateCustomer(CID, customer)),
        // updateSubscriptions:(subscription)=>dispatch(actions.updateSubscriptions(subscription))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
