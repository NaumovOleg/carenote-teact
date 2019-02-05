import * as actionTypes from '../actions/actionTypes';

const initialState = {};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_R_CUSTOMER:
            return {
                ...action.customer
            };
        default:
            return state;
    }
};

export default reducer;