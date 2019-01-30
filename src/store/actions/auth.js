import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
import { getLastOrder } from  '../actions/index';


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

export const logIn = ( data ) => dispatch => {
    console.log ( data );
    return request ( {
        url:    '/account/login',
        method: 'POST',
        data,
    } ).then ( res => {
        console.log ( res );
        authStart ( true );
    } ).catch ( e => [
        console.log ( 'error', e ),
    ] );
};


export const getCustomer = ( cb ) => dispatch => {
    const customer_id = window.currntCustomer;
    let customer  = {};
    if( window.customer !== undefined ){
        dispatch ( initCustomerData (  window.customer ) );
        cb(window.customer.id);
      return
    }
    return request ( {
        url:    '/admin/customers/' + customer_id + '.json',
        method: 'GET',
    } ).then ( res => {
        dispatch ( initCustomerData ( res.data.customer ) );
        cb( res.data.customer.id)
    } )
       .catch ( e => {
           customer = {
                   'customer':
                       {
                           'id':                   '1205206646873',
                           'email':                'oleg.naumov@devabit.com',
                           'accepts_marketing':    'false',
                           'created_at':           '',
                           'updated_at':           '',
                           'first_name':           'Oleg',
                           'last_name':            'Naumov',
                           'orders_count':         '1',
                           'state':                '',
                           'total_spent':          '0',
                           'last_order_id':        '819967590489',
                           'note':                 '',
                           'verified_email':       '',
                           'multipass_identifier': '',
                           'tax_exempt':           'false',
                           'phone':                '+380971234567',
                           'tags':                 '',
                           'last_order_name':      '',
                           'currency':             '',
                           'addresses':            [ {
                               'id':            1205391655001,
                               'customer_id':   1205206646873,
                               'first_name':    'Oleg',
                               'last_name':     'Naumov',
                               'company':       '',
                               'address1':      'Ukraine',
                               'address2':      '',
                               'city':          'Ukraine',
                               'province':      'Ukraine',
                               'country':       'Ukraine',
                               'zip':           '88888',
                               'phone':         '',
                               'name':          'Oleg Naumov',
                               'province_code': null,
                               'country_code':  'UA',
                               'country_name':  'Ukraine',
                               'default':       true,
                           } ],
                           'default_address':      {
                               'id':            1205391655001,
                               'customer_id':   1205206646873,
                               'first_name':    'Oleg',
                               'last_name':     'Naumov',
                               'company':       '',
                               'address1':      'Ukraine',
                               'address2':      '',
                               'city':          'Ukraine',
                               'province':      'Ukraine',
                               'country':       'Ukraine',
                               'zip':           '88888',
                               'phone':         '',
                               'name':          'Oleg Naumov',
                               'province_code': null,
                               'country_code':  'UA',
                               'country_name':  'Ukraine',
                               'default':       true,
                           },
                       },
               };
           dispatch ( initCustomerData ( customer.customer ) );
           cb(  customer.customer.id );
           console.log ( 'error in react', e );
       } );
};

export const updateCustomer = ( customer ) => dispatch => {
    console.log ( customer );
    return request ( {
        url:    '/admin/customers/' + customer.customer.id + '.json',
        method: 'PUT',
        customer,
    } ).then ( res => {
        console.log ( res );
    } )
       .catch ( e => {
           console.log ( 'error in react', e );
       } );
};


