import * as actionTypes from '../actions/actionTypes';

const initialState = {
    plan:  'Gold plan' ,
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_PLAN:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default reducer;