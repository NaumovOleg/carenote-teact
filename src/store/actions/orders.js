import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';

export const initOrders = ( orders ) => {
    return {
        type: actionTypes.GET_ORDERS,
        orders,
    };
};

export const getOrders = ( CID ) => dispatch => {
    return request ( {
        url:    'api/orders/'+CID,
        method: 'GET',
    } ).then ( res => {
        dispatch( initOrders( res.data ) )
    } )
        .catch ( e => {
            console.log ( 'error in reac eeeet  products', e );
        } );
};

export const updateSubscriptions = (OID, order ) => dispatch => {
    console.log ( subscription );
    return request ( {
        url:    'api/orders/'+OID,
        method: 'PUT',
        data:order
    } ).then ( res => {
        dispatch( initOrders( res.data.subscriptions ) )
    } )
        .catch ( e => {
            console.log ( 'error in reac eeeet  products', e );
        } );
};
