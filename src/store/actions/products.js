
import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
export const initProducts = ( products ) => {
    return {
        type: actionTypes.GET_PRODUCTS,
        products
    };
};


export const getProducts = () => dispatch => {
    return request({
        url: `/api/products`,
        method: 'GET',
    }).then ( res => {

        dispatch(initProducts(res.data.products))
    } )
      .catch ( e => {
          console.log( 'error in reac t  products',  e )
      } );
};
