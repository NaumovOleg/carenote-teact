
import * as actionTypes from './actionTypes';
import { request } from '../../utils/request';
export const initPlan = ( plan ) => {
    return {
        type: actionTypes.INIT_PLAN,
        ...plan
    };
};