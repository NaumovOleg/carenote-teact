
import * as actionTypes from './actionTypes';
import axios from 'axios';
export const initPlan = ( plan ) => {
    return {
        type: actionTypes.INIT_PLAN,
        ...plan
    };
};