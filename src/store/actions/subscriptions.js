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
    console.log ( scutomer );
    return request ( {
        url:    'https://cors-anywhere.herokuapp.com/api.rechargeapps.com/subscriptions?shopify_customer_id='+scutomer,
        method: 'GET',
    } ).then ( res => {
        console.log( res )
        dispatch( initSubscriptions( res.data.subscriptions ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac t  products', e );
       } );
};