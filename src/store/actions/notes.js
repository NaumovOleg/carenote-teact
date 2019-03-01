import * as actionTypes from './actionTypes';
import {
    request
} from '../../utils/request';

export const initNotes = (notes, count) => {
    return {
        type: actionTypes.GET_NOTES,
        payload: {count:count,notes:notes}
    };
};


export const getNotes = (reqId, page) => dispatch => {

    return request({
            url: 'api/carenotes/requester/'+reqId+'?per_page=10&page='+page,
            method: 'GET',
        }).then(res => { 
            dispatch(initNotes(res.data.results, res.data.count));
        })
        .catch(e => {});
};

export const getComments = (noteId) => {

    return request({
            url: 'api/carenotes/'+noteId+'/comments',
            method: 'GET',
        }).then(res => {
            return res.data.comments.filter( (item) => item.public);
        })
        .catch(e => {});
};