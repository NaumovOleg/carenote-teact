import * as actionTypes from '../actions/actionTypes';

const initialState = {};
const Subscriptions = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_SUBSCRIPTIONS:

            return {
                ...action.subscriptions
            };
        default:
            return state;
    }
};

const AdditionalData = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ADDITIONAL_SUBSCRIPTIONS:

            return {
                ...action.data
            };
        default:
            return state;
    }
};

export default {
    subscriptions:Subscriptions,
    additionalSubscriptions:AdditionalData
};