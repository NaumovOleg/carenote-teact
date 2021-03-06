import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user:            null,
    loggedIn:        false,
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_CHECK:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default reducer;