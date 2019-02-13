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
        dispatch( initSubscriptions( res.data.subscriptions[0] ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac eeeet  products', e );
       } );
};

export const updateSubscriptions = ( SID, subscription ) => dispatch => {
    return request ( {
        url:    'api/subscriptions/'+SID,
        method: 'PUT',
        data:subscription
    } ).then ( res => {
        dispatch( initSubscriptions( res.data.subscription ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac eeeet  products', e );
       } );
};