import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
export const initNotes = (  notes ) => {
    return {
        type:    actionTypes.GET_NOTES,
        payload: orders,
    };
};


export const getNotes = ( customer_id ) => dispatch => {
    const notes = []
    dispatch(initNotes())
    //if ( window.order !== undefined ) {
    //    dispatch ( initPlan (  window.order ) );
    //    return;
    //}
    //return request ( {
    //    url:    '/admin/orders.json?customer_id=' + customer_id,
    //    method: 'GET',
    //} ).then ( res => {
    //    dispatch ( initPlan (  res.data.orders ) );
    //} )
    //   .catch ( e => {
    //       const orders = [{"created_at":"2019-01-28 05:07:12 -0800","id":"819967590489","line_items":[{"id":1825844756569,"title":"$89 weekly call plan","price":"89.00","line_price":"89.00","quantity":1,"sku":"","grams":0,"properties":[],"vendor":"carenote","requires_shipping":false,"applied_discounts":[],"tax_lines":[{"tax_line":{"title":"CA State Tax","price":"6.45","rate":0.0725}},{"tax_line":{"title":"Los Angeles County Tax","price":"2.00","rate":0.0225}}],"taxable":true,"gift_card":false,"variant_id":18218922147929,"variant":{"id":18218922147929,"product_id":1859628367961,"title":"Default Title","price":"89.00","sku":"","position":1,"inventory_policy":"deny","compare_at_price":null,"fulfillment_service":"manual","inventory_management":null,"option1":"Default Title","option2":null,"option3":null,"created_at":"2018-11-19T12:24:42-08:00","updated_at":"2019-01-28T11:50:35-08:00","taxable":true,"barcode":"","grams":0,"image_id":null,"weight":0,"weight_unit":"lb","inventory_item_id":18474423910489,"inventory_quantity":-2,"old_inventory_quantity":-2,"requires_shipping":false},"url":"/products/89-00-twice-weekly-plan?variant=18218922147929","product":{"id":1859628367961,"title":"$89 weekly call plan","body_html":"<p>2 calls per week</p>","vendor":"carenote","product_type":"","created_at":"2018-11-19T12:24:42-08:00","handle":"89-00-twice-weekly-plan","updated_at":"2019-01-24T00:30:38-08:00","published_at":"2018-11-19T12:24:42-08:00","template_suffix":null,"tags":"Monthly Plans","published_scope":"web","variants":[{"id":18218922147929,"product_id":1859628367961,"title":"Default Title","price":"89.00","sku":"","position":1,"inventory_policy":"deny","compare_at_price":null,"fulfillment_service":"manual","inventory_management":null,"option1":"Default Title","option2":null,"option3":null,"created_at":"2018-11-19T12:24:42-08:00","updated_at":"2019-01-28T11:50:35-08:00","taxable":true,"barcode":"","grams":0,"image_id":null,"weight":0,"weight_unit":"lb","inventory_item_id":18474423910489,"inventory_quantity":-2,"old_inventory_quantity":-2,"requires_shipping":false}],"options":[{"id":2549599010905,"product_id":1859628367961,"name":"Title","position":1,"values":["Default Title"]}],"images":[{"id":5441874952281,"product_id":1859628367961,"position":1,"created_at":"2018-11-19T15:03:08-08:00","updated_at":"2018-11-19T15:03:08-08:00","alt":null,"width":600,"height":488,"src":"https://cdn.shopify.com/s/files/1/0075/9824/3929/products/only-89-hi.png?v=1542668588","variant_ids":[]},{"id":5441895628889,"product_id":1859628367961,"position":2,"created_at":"2018-11-19T15:05:09-08:00","updated_at":"2018-11-19T15:05:09-08:00","alt":null,"width":682,"height":1024,"src":"https://cdn.shopify.com/s/files/1/0075/9824/3929/products/woman_on_phone.jpg?v=1542668709","variant_ids":[]}],"image":{"id":5441874952281,"product_id":1859628367961,"position":1,"created_at":"2018-11-19T15:03:08-08:00","updated_at":"2018-11-19T15:03:08-08:00","alt":null,"width":600,"height":488,"src":"https://cdn.shopify.com/s/files/1/0075/9824/3929/products/only-89-hi.png?v=1542668588","variant_ids":[]}},"fulfillment":null}]}];
    //       dispatch ( initPlan (  orders ) );
    //       console.log ( 'error in react', e );
    //   } );
};