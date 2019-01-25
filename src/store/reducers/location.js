import * as actionTypes from '../actions/actionTypes';
const initialState = {
    prev:'/subscription',
    curr:'/subscriptions'
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CHANGE_LOCATION:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default reducer;
