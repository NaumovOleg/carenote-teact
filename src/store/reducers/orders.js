import * as actionTypes from '../actions/actionTypes';

const initialState = [];
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ORDERS:
            return {
                ...action.orders
            };
        default:
            return state;
    }
};

export default reducer;