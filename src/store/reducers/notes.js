import * as actionTypes from '../actions/actionTypes';

const initialState = [
    {
        date:new Date(),
        title:'Carenote 01',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 02',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 03',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 04',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 05',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 06',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 07',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 08',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 09',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 10',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 11',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 12',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 13',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 14',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 15',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 16',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 17',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 18',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 19',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 20',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 21',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 22',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 23',
        name:'Barry',
        image:'',
        link:'google.com'
    },
    {
        date:new Date(),
        title:'Carenote 24',
        name:'Barry',
        image:'',
        link:'google.com'
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