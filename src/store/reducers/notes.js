import * as actionTypes from '../actions/actionTypes';

const initialState = [
    {
        date:new Date(),
        title:'Carenote 01'
    },
    {
        date:new Date(),
        title:'Carenote 02'
    },
    {
        date:new Date(),
        title:'Carenote 03'
    },
    {
        date:new Date(),
        title:'Carenote 04'
    },
    {
        date:new Date(),
        title:'Carenote 05'
    },
    {
        date:new Date(),
        title:'Carenote 06'
    },
    {
        date:new Date(),
        title:'Carenote 07'
    },
    {
        date:new Date(),
        title:'Carenote 08'
    },
    {
        date:new Date(),
        title:'Carenote 09'
    },
    {
        date:new Date(),
        title:'Carenote 10'
    },
    {
        date:new Date(),
        title:'Carenote 11'
    },
    {
        date:new Date(),
        title:'Carenote 12'
    },
    {
        date:new Date(),
        title:'Carenote 13'
    },
    {
        date:new Date(),
        title:'Carenote 14'
    },
    {
        date:new Date(),
        title:'Carenote 15'
    },
    {
        date:new Date(),
        title:'Carenote 16'
    },
    {
        date:new Date(),
        title:'Carenote 17'
    },
    {
        date:new Date(),
        title:'Carenote 18'
    },
    {
        date:new Date(),
        title:'Carenote 19'
    },
    {
        date:new Date(),
        title:'Carenote 20'
    },
    {
        date:new Date(),
        title:'Carenote 21'
    },
    {
        date:new Date(),
        title:'Carenote 22'
    },
    {
        date:new Date(),
        title:'Carenote 23'
    },
    {
        date:new Date(),
        title:'Carenote 24'
    },
];
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_NOTES:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};

export default reducer;