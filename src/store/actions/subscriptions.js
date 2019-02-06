import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';
setRechargeToken ();
export const initSubscriptions = ( subscriptions ) => {
    return {
        type: actionTypes.GET_SUBSCRIPTIONS,
        subscriptions,
    };
};

export const getSubscriptions = ( scutomer ) => dispatch => {
    return request ( {
        url:    'https://cors-anywhere.herokuapp.com/api.rechargeapps.com/subscriptions?shopify_customer_id='+scutomer+'',
        method: 'GET',
    } ).then ( res => {
        dispatch( initSubscriptions( res.data.subscriptions ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac eeeet  products', e );
       } );
};

export const updateSubscriptions = ( subscription ) => dispatch => {
    console.log ( subscription );
    return request ( {
        url:    'https://api.rechargeapps.com/subscriptions/'+subscription.id,
        method: 'PUT',
    } ).then ( res => {
        console.log( res )
        dispatch( initSubscriptions( res.data.subscriptions ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac eeeet  products', e );
       } );
};