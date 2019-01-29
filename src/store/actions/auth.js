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

           console.log ( 'error in react', e );

       } );
};


