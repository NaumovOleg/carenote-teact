
import * as actionTypes from './actionTypes';


export const changeLocation = (location) => {
    return {
        type: actionTypes.CHANGE_LOCATION,
        payload:location
    };
};
