import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user:            {
        first_name:'Elbert',
        last_name:'elbert-surnamme'
    },

    loggedIn:        true,
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_CHECK:
            return {
                ...state,
            };
        case actionTypes.GET_CURRENT_CUSTOMER:
            return {
                loggedIn:true,
                user:action.customer
            }
        case actionTypes.LOG_OUT:
            return {
                ...state,
                loggedIn: false,
            };
        default:
            return state;
    }
};

export default reducer;
