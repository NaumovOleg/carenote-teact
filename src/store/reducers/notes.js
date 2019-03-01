import * as actionTypes from '../actions/actionTypes';

const initialState ={
    count:0,
    notes:[]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_NOTES:
            return {count:action.payload.count,notes:action.payload.notes||[]};
        default:
            return state;
    }
};

export default reducer;