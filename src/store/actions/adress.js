import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';
setRechargeToken ();
export const initAddress = ( address ) => {
    return {
        type: actionTypes.GET_ADDRESS,
        address,
    };
};


export const getAddress = ( cutomer ) => dispatch => {

    return request ( {
        url:    'api/addresses/'+cutomer,
        method: 'GET',
    } ).then ( res => {
        dispatch ( initAddress ( res.data ) );
        return res.data;
    } )
       .catch ( e => {
           console.log ( 'error in react  products', e );
       } );
};