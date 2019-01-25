
import * as actionTypes from './actionTypes';
import axios from 'axios';
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


