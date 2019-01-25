
import * as actionTypes from './actionTypes';


export const showMenu = (value) => {
    return {
        type: actionTypes.DISPLAY_MENU,
        payload:value
    };
};