import * as actionTypes from './actionTypes';
import {
    request
} from '../../utils/request';

export const initComments = (comments) => {
    return {
        type: actionTypes.GET_NOTES,
        comments
    };
};


export const getComments = (noteId) => dispatch => {

    return request({
            url: 'api/carenotes/'+noteId+'/comments',
            method: 'GET',
        }).then(res => {
            dispatch(initComments(res.data.comments));
        })
        .catch(e => {});
};