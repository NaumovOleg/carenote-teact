import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
import {getLastOrder} from  '../actions/index'


export const authStart = ( auth ) => {
    return {
        type: actionTypes.AUTH_CHECK,
    };
};

export const initCustomerData = ( customer ) => {
    return {
        type: actionTypes.GET_CURRENT_CUSTOMER,
        customer,
    };
};
export const logOut = ( auth ) => {
    return {
        type: actionTypes.LOG_OUT,
    };
};

export const logIn = ( data ) => dispatch=> {
    console.log( data )
    return request ( {
        url: '/account/login',
        method: 'POST',
        data
    } ).then ( res => {
        console.log( res )
        authStart(true)
       } ).catch(e =>[
        console.log('error', e )
    ])
};


export const getCustomer = ( cb ) => dispatch => {
    const customer_id = window.currntCustomer;
    return request ( {
        url: '/admin/customers/' + customer_id + '.json',
        method: 'GET',
    } ).then ( res => {
        dispatch ( initCustomerData ( res.data.customer ) );
        const data = {
            last_order:res.data.customer.last_order_id,
            customer_id:res.data.customer.id
        };
        cb(data);
    } )
       .catch ( e => {
           let customer = {"customer":{"id":1205206646873,"email":"oleg.naumov@devabit.com","accepts_marketing":false,"created_at":"2019-01-28T04:14:01-08:00","updated_at":"2019-01-29T02:27:07-08:00","first_name":"Oleg","last_name":"Naumov","orders_count":1,"state":"enabled","total_spent":"0.00","last_order_id":819967590489,"note":null,"verified_email":true,"multipass_identifier":null,"tax_exempt":false,"phone":"+380971234567","tags":"","last_order_name":"#1005","currency":"USD","addresses":[{"id":1205391655001,"customer_id":1205206646873,"first_name":"Oleg","last_name":"Naumov","company":"","address1":"Ukraine","address2":"","city":"Ukraine","province":"Ukraine","country":"Ukraine","zip":"88888","phone":"","name":"Oleg Naumov","province_code":null,"country_code":"UA","country_name":"Ukraine","default":true}],"default_address":{"id":1205391655001,"customer_id":1205206646873,"first_name":"Oleg","last_name":"Naumov","company":"","address1":"Ukraine","address2":"","city":"Ukraine","province":"Ukraine","country":"Ukraine","zip":"88888","phone":"","name":"Oleg Naumov","province_code":null,"country_code":"UA","country_name":"Ukraine","default":true}}}
           const data = {
               last_order: customer.customer.last_order_id,
               customer_id: customer.customer.id
           };
           dispatch ( initCustomerData ( customer.customer ) );
           cb(data);
           console.log ( 'error in react', e );

       } );
};

export const updateCustomer = ( customer ) => dispatch => {
    console.log( customer )
    return request ( {
        url: '/admin/customers/' + customer.customer.id + '.json',
        method: 'PUT',
        customer
    } ).then ( res => {
        console.log( res )
    } )
       .catch ( e => {
           console.log ( 'error in react', e );
       } );
};


