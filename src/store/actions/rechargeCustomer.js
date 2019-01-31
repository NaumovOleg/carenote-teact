import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';
setRechargeToken ();
export const initRCustomer = ( customer ) => {
    return {
        type: actionTypes.GET_R_CUSTOMER,
        customer,
    };
};

export const getRCustomer = ( scutomer ) => dispatch => {
    console.log ( scutomer );
    return request ( {
        url:    'https://api.rechargeapps.com/customers?shopify_customer_id='+scutomer,
        method: 'GET',
    } ).then ( res => {
        console.log( res )
            dispatch( initRCustomer( res.data.customers[0] ) )
    } )
       .catch ( e => {
           console.log ( 'error in reac t  products', e );
       } );
};

