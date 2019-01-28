
import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
export const authStart = ( auth  ) => {
    return {
        type: actionTypes.AUTH_CHECK

    };
};
export const logOut = ( auth  ) => {
    return {
        type: actionTypes.LOG_OUT
    };
};


