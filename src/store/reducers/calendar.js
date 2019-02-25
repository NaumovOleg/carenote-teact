import * as actionTypes from '../actions/actionTypes';

const initialState = [];
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_CALENDAR:
            return [...action.calendar];
        default:
            return state;
    }
};

export default reducer;
