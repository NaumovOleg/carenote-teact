import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';

export const initSubscriptions = ( subscriptions ) => {
    return {
        type: actionTypes.GET_SUBSCRIPTIONS,
        subscriptions,
    };
};

export const getSubscriptions = ( scutomer ) => dispatch => {
    return request ( {
        url:    'api/subscriptions/'+scutomer,
        method: 'GET',
    } ).then ( res => {
        dispatch( initSubscriptions( res.data ) )
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
        dispatch( initSubscriptions( res.data.subscriptions ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac eeeet  products', e );
       } );
};