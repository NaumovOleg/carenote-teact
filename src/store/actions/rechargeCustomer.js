

import * as actionTypes from './actionTypes';
import { request, setRechargeToken } from '../../utils/request';
setRechargeToken();
export const initRCustomer = ( products ) => {
    return {
        type: actionTypes.GET_PRODUCTS,
        products
    };
};

export const getRCustomer = (  ) => dispatch => {
    return request({
        url: ` https://api.rechargeapps.com/customers`,
        method: 'GET',
    }).then ( res => {
        console.log( res )

    } )
      .catch ( e => {
          console.log( 'error in reac t  products',  e )
      } );
};








const customer  = {"id": 24404884,
    "hash": "24404884395b8005844ce46f",
    "shopify_customer_id": "1205206646873",
    "email": "oleg.naumov@devabit.com",
    "created_at": "2019-01-31T04:12:43",
    "updated_at": "2019-01-31T04:38:15",
    "first_name": "Oleg",
    "last_name": "Naumov",
    "billing_address1": "3030 Nebraska Avenue",
    "billing_address2": null,
    "billing_zip": "90001",
    "billing_city": "Los Angeles",
    "billing_company": null,
    "billing_province": "California",
    "billing_country": "United States",
    "billing_phone": "+380971234567",
    "processor_type": null,
    "status": "INACTIVE",
    "has_valid_payment_method": true,
    "reason_payment_method_not_valid": null,
    "has_card_error_in_dunning": false,
    "number_active_subscriptions": 0,
    "number_subscriptions": 0,
    "first_charge_processed_at": null}
