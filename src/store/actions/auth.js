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




export const getCustomer = ( CID ) => dispatch => {

    console.log( CID )
    return request ( {
        url:    'api/users/'+CID,
        method: 'GET',
    } ).then ( res => {

        dispatch( initCustomerData( res.data ) );
        return res.data
    } )
        .catch ( e => {
            console.log ( 'error in reac t  products', e );
        } );
};

export const updateCustomer = ( CID, customer ) => dispatch => {

    return request ( {
        url:    'api/users/'+CID,
        method: 'PUT',
        data:customer
    } ).then ( res => {
        dispatch( initCustomerData( res.data ) );
        return res.data
    } )
        .catch ( e => {
            console.log ( 'error in reac t  products', e );
        } );
};


