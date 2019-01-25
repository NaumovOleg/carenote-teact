import * as actionTypes from '../actions/actionTypes';
const initialState = {
    display:  'block' ,
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.DISPLAY_MENU:
            console.log( action );
            return {
                display:action.payload
            };
        default:
            return state;
    }
};

export default reducer;