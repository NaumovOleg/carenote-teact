import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user:            {
        name:'Elbert',
        surname:'elbert-surnamme'
    },

    loggedIn:        true,
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_CHECK:
            return {
                ...state,
                loading: true,
            };
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
