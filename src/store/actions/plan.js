import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
export const initPlan = ( lastOrderId,orders ) => {
    let lastOrder = ''
    orders.forEach(el=>{
        if( el.id === lastOrderId ){
            lastOrder = el;
            return
        }
    });
    return {
        type:    actionTypes.INIT_PLAN,
        payload: lastOrder,
    };
};


export const getLastOrder = ( data ) => dispatch => {
    const { customer_id, last_order } = data;
    return request ( {
        url:    '/admin/orders.json?customer_id=' + customer_id,
        method: 'GET',
    } ).then ( res => {
        dispatch ( initPlan (last_order, res.data.orders ) );
    } )
       .catch ( e => {
           console.log ( 'error in react', e );
       } );
};