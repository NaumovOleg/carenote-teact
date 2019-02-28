
import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
export const initProducts = ( products ) => {
    return {
        type: actionTypes.GET_PRODUCTS,
        products
    };
};

export const initParcedProducts = ( productsArray ) => {
    const products  = {};
    productsArray.forEach(el=>{
        if( el.product_type.includes('Auto renew')){
            return
        }

        products[el.id] = {
            name: el.product_type,
            id: el.id,
            variantId: el.variants[0].id,
            price: el.variants[0].price,
            ...el
        };

        if( el.product_type.includes('Platinum')){
            products[el.id].plan_description = '7 Care calls per week, unlimited outbound calls, unlimited text messaging'
        }
        if( el.product_type.includes('Gold')){
            products[el.id].plan_description = '2 Care calls per week, 2 outbound calls, unlimited text messaging'
        }
        if( el.product_type.includes('Silver')){
            products[el.id].plan_description = '1 Care call per week, unlimited text messaging'
        }

    })

    return {
        type: actionTypes.GET_PARSED_PRODUCTS,
        products
    };
};


export const getProducts = () => dispatch => {
    return request({
        url: `/api/products`,
        method: 'GET',
    }).then ( res => {
        dispatch(initParcedProducts(res.data.products));
        dispatch(initProducts(res.data.products))
    } )
      .catch ( e => {
          console.log( 'error in reac t  products',  e )
      } );
};
