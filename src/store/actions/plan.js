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
        dispatch ( initPlan ( res.data.orders ) );
    } )
       .catch ( e => {
           let orders = {
               'orders': [ {
                   'id':                         819967590489,
                   'email':                      'oleg.naumov@devabit.com',
                   'closed_at':                  null,
                   'created_at':                 '2019-01-28T05:07:12-08:00',
                   'updated_at':                 '2019-01-28T05:07:12-08:00',
                   'number':                     5,
                   'note':                       '',
                   'token':                      'bfb6ab360f1afcc4639c986f77c2393b',
                   'gateway':                    'manual',
                   'test':                       false,
                   'total_price':                '97.45',
                   'subtotal_price':             '89.00',
                   'total_weight':               0,
                   'total_tax':                  '8.45',
                   'taxes_included':             false,
                   'currency':                   'USD',
                   'financial_status':           'pending',
                   'confirmed':                  true,
                   'total_discounts':            '0.00',
                   'total_line_items_price':     '89.00',
                   'cart_token':                 null,
                   'buyer_accepts_marketing':    false,
                   'name':                       '#1005',
                   'referring_site':             null,
                   'landing_site':               null,
                   'cancelled_at':               null,
                   'cancel_reason':              null,
                   'total_price_usd':            '97.45',
                   'checkout_token':             null,
                   'reference':                  null,
                   'user_id':                    29981638745,
                   'location_id':                15596912729,
                   'source_identifier':          null,
                   'source_url':                 null,
                   'processed_at':               '2019-01-28T05:07:12-08:00',
                   'device_id':                  null,
                   'phone':                      null,
                   'customer_locale':            null,
                   'app_id':                     1354745,
                   'browser_ip':                 null,
                   'landing_site_ref':           null,
                   'order_number':               1005,
                   'discount_applications':      [],
                   'discount_codes':             [],
                   'note_attributes':            [],
                   'payment_gateway_names':      [ 'manual' ],
                   'processing_method':          'manual',
                   'checkout_id':                null,
                   'source_name':                'shopify_draft_order',
                   'fulfillment_status':         null,
                   'tax_lines':                  [ { 'price': '6.45', 'rate': 0.0725, 'title': 'CA State Tax', 'price_set': { 'shop_money': { 'amount': '6.45', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '6.45', 'currency_code': 'USD' } } }, {
                       'price':     '2.00',
                       'rate':      0.0225,
                       'title':     'Los Angeles County Tax',
                       'price_set': { 'shop_money': { 'amount': '2.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '2.00', 'currency_code': 'USD' } },
                   } ],
                   'tags':                       '',
                   'contact_email':              'oleg.naumov@devabit.com',
                   'order_status_url':           'https:\/\/checkout.shopify.com\/7598243929\/orders\/bfb6ab360f1afcc4639c986f77c2393b\/authenticate?key=dfaa1b2f16d8aa2730919187a043d60c',
                   'presentment_currency':       'USD',
                   'total_line_items_price_set': { 'shop_money': { 'amount': '89.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '89.00', 'currency_code': 'USD' } },
                   'total_discounts_set':        { 'shop_money': { 'amount': '0.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '0.00', 'currency_code': 'USD' } },
                   'total_shipping_price_set':   { 'shop_money': { 'amount': '0.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '0.00', 'currency_code': 'USD' } },
                   'subtotal_price_set':         { 'shop_money': { 'amount': '89.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '89.00', 'currency_code': 'USD' } },
                   'total_price_set':            { 'shop_money': { 'amount': '97.45', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '97.45', 'currency_code': 'USD' } },
                   'total_tax_set':              { 'shop_money': { 'amount': '8.45', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '8.45', 'currency_code': 'USD' } },
                   'total_tip_received':         '0.0',
                   'line_items':                 [ {
                       'id':                           1825844756569,
                       'variant_id':                   18218922147929,
                       'title':                        '$89 weekly call plan',
                       'quantity':                     1,
                       'price':                        '89.00',
                       'sku':                          '',
                       'variant_title':                null,
                       'vendor':                       'carenote',
                       'fulfillment_service':          'manual',
                       'product_id':                   1859628367961,
                       'requires_shipping':            false,
                       'taxable':                      true,
                       'gift_card':                    false,
                       'name':                         '$89 weekly call plan',
                       'variant_inventory_management': null,
                       'properties':                   [],
                       'product_exists':               true,
                       'fulfillable_quantity':         1,
                       'grams':                        0,
                       'total_discount':               '0.00',
                       'fulfillment_status':           null,
                       'price_set':                    { 'shop_money': { 'amount': '89.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '89.00', 'currency_code': 'USD' } },
                       'total_discount_set':           { 'shop_money': { 'amount': '0.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '0.00', 'currency_code': 'USD' } },
                       'discount_allocations':         [],
                       'tax_lines':                    [ { 'title': 'CA State Tax', 'price': '6.45', 'rate': 0.0725, 'price_set': { 'shop_money': { 'amount': '6.45', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '6.45', 'currency_code': 'USD' } } }, {
                           'title':     'Los Angeles County Tax',
                           'price':     '2.00',
                           'rate':      0.0225,
                           'price_set': { 'shop_money': { 'amount': '2.00', 'currency_code': 'USD' }, 'presentment_money': { 'amount': '2.00', 'currency_code': 'USD' } },
                       } ],
                   } ],
                   'shipping_lines':             [],
                   'fulfillments':               [],
                   'refunds':                    [],
                   'customer':                   {
                       'id':                   1205206646873,
                       'email':                'oleg.naumov@devabit.com',
                       'accepts_marketing':    false,
                       'created_at':           '2019-01-28T04:14:01-08:00',
                       'updated_at':           '2019-01-28T05:07:12-08:00',
                       'first_name':           'Oleg',
                       'last_name':            'Naumov',
                       'orders_count':         1,
                       'state':                'enabled',
                       'total_spent':          '0.00',
                       'last_order_id':        819967590489,
                       'note':                 null,
                       'verified_email':       false,
                       'multipass_identifier': null,
                       'tax_exempt':           false,
                       'phone':                null,
                       'tags':                 '',
                       'last_order_name':      '#1005',
                       'currency':             'USD',
                   },
               } ],
           };
           dispatch ( initPlan ( last_order, orders.orders ) );
           console.log ( 'error in react', e );

       } );
};