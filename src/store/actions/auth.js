import { showNotification } from './index';
import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_CHECK,
    };
};


