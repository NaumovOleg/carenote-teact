import * as actionTypes from './actionTypes';
import {request} from '../../utils/request';
import * as moment from 'moment';
moment.locales('us');

export const initCalendar = (calendar) => {

    return {
        type: actionTypes.INIT_CALENDAR,
        calendar
    };
};

export const getCalendatData = (params) => dispatch => {
    const url = `/api/calendar/${params.CID}?limit=${params.limit}&timemin=${params.timeMin}&timemax=${params.timeMax}`;
    return request({
        url: url,
        method: 'GET',
    }).then(res => {
        dispatch(initCalendar(res.data))
    })
        .catch(e => {
            console.log('error in reac t  products', e)
        });
};



