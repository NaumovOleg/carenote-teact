import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';
const req = require('request');
setRechargeToken ();
export const initAddress = ( address ) => {
    return {
        type: actionTypes.GET_ADDRESS,
        address,
    };
};


export const getAddress = ( cutomer ) => dispatch => {

    return request ( {
        url:    'https://api.rechargeapps.com/customers/' + cutomer + '/addresses',
        method: 'GET',
    } ).then ( res => {

        console.log( res )

        dispatch ( initAddress ( res.data.addresses[ 0 ] ) );

    } )
       .catch ( e => {
           console.log ( 'error in react  products', e );
       } );
};