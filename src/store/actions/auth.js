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


export const getCustomer = ( cb ) => dispatch => {
    const customer_id = window.currntCustomer;
    return request ( {
        url: '/admin/customers/' + customer_id + '.json',
        method: 'GET',
    } ).then ( res => {
        dispatch ( initCustomerData ( res.data.customer ) );
        const data = {
            last_order:res.data.customer.last_order_id,
            customer:res.data.customer.id
        };
        cb(data);
    } )
       .catch ( e => {
           let customer = {
               'customer': {
                   'id':                   1205206646873,
                   'email':                'oleg.naumov@devabit.com',
                   'accepts_marketing':    false,
                   'created_at':           '2019-01-28T04:14:01-08:00',
                   'updated_at':           '2019-01-28T04:14:02-08:00',
                   'first_name':           'Oleg',
                   'last_name':            'Naumov',
                   'orders_count':         1,
                   'state':                'enabled',
                   'total_spent':          '0.00',
                   'last_order_id':        819967590489,
                   'note':                 null,
                   'verified_email':       false,
                   'multipass_identifier': null,
                   'tax_exempt':           false,
                   'phone':                null,
                   'tags':                 '',
                   'last_order_name':      null,
                   'currency':             'USD',
                   'addresses':            [],
               },
           };
           const data = {
               last_order: customer.customer.last_order_id,
               customer: customer.customer.id
           };
           dispatch ( initCustomerData ( customer.customer ) );
           cb(data);
           console.log ( 'error in react', e );

       } );
};


