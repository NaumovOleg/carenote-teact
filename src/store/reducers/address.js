import * as actionTypes from '../actions/actionTypes';

const initialState = {};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ADDRESS:

            return {
                ...action.address
            };
        default:
            return state;
    }
};

export default reducer;